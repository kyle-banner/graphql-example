# graphql-example
Example of Using GraphQL to Wrap a REST Layer

## Part 1
Result of https://www.apollographql.com/docs/apollo-server/getting-started/

Example Query:
```
{
  books {
    title
    author
  }
}
```

Note that only fields requested will be returned, remove title and show that title is not in the result.

## Part 2
Arrange the code responsibly and create our first query that actually uses the REST API.

Introspection Query:
```
{
  __type(name: "Employee") {
    name
    fields {
      name
      type {
        name
        kind
        ofType {
          name
          kind
        }
      }
    }
  }
}
```

Example Query:
```
query {
  employee(id: "8caf5cac-7dca-4e27-bf0f-609ef6c0ac36") {
    email
    id
    name {
      firstName
      lastName
    }
    title
    practice
  }
}
```

## Part 3
Add mutations and queries to cover the Roulette REST API.

Available Queries and Mutations:
```
query getEmployeeById {
  employee(id: "8caf5cac-7dca-4e27-bf0f-609ef6c0ac36") {
    email
    id
    name {
      firstName
      lastName
    }
    title
    practice
  }
}

query getAllEmployees {
  employees {
    id
    name {
      firstName
      lastName
    }
    title
    practice
  }
}

mutation createEmployee {
  createEmployee(input: {
    email: "kirk.hammett@slalom.com",
    employerName: "Slalom",
    name: {
      firstName: "Kirk",
      lastName: "Hammett",
    }
    practice: DL,
    title: PAL
  }) {
    url
  }
}

mutation deleteEmployee {
  deleteEmployee(input:{
    id: "..."
  }) {
    success
  }
}

mutation updateEmployee {
  updateEmployee(input:{
    id: "8caf5cac-7dca-4e27-bf0f-609ef6c0ac36",
    email: "this.is.a.new.email@slalom.com",
    employerName: "Slalom",
    name: {
      firstName: "Kyle",
      lastName: "Banner",
    }
    practice: DL,
    title: SA
  }) {
    url
  }
}
```

## Part 4

An example of Federation v1 pulled directly from https://github.com/apollographql/federation-demo

This repository does not have an example of Federation v2 yet.
