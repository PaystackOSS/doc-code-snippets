const hosted = `{
  "mcpServers": {
    "paystack": {
      "command": "npx",
      "args": ["@paystack/mcp-server", "--api-key", "sk_test_..."]
    }
  }
}
`

const local = `{
  "mcpServers": {
    "paystack": {
      "command": "node",
      "args": ["/path/to/paystack-mcp-server/build/index.js"],
      "env": {
        "PAYSTACK_TEST_SECRET_KEY": "sk_test_..."
      }
    }
  }
}
`

export {hosted, local}