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

