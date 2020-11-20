# graphql-example
Example of Using GraphQL to Wrap a REST Layer

## Part One
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

## Part Two
Arrange the code responsibly and create our first query that actually uses the REST API.

Introspection Query:
```
{
  __type(name: "employee") {
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
  }
}
```

## Part Three
Add mutations and queries to cover the Roulette REST API.

Available Queries and Mutations:
```
query getEmployeeById {
  employee(id: "0894df6c-aed4-494b-bf57-22fa378b9609") {
    email
    id
    name {
      firstName
      lastName
    }
  }
}

query getAllEmployees {
  employees {
    id
  }
}

mutation createEmployee {
  createEmployee(input: {
    email: "new.graphql@slalom.com",
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

mutation deleteEmployee {
  deleteEmployee(input:{
    id: "ce118be0-e4f3-4e71-8032-162ac9517170"
  }) {
    success
  }
}

mutation updateEmployee {
  updateEmployee(input:{
    id: "0894df6c-aed4-494b-bf57-22fa378b9609",
    email: "new.graphql@slalom.com",
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