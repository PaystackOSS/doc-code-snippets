const json = `{
  "status": [boolean],  // Only true if the details provided could be processed and no error occured while processing
  "message": [string], // Explains why status is false... Entirely informational. Please only log this but do not use for your checks
  "data": [object]    // contains actionable result of processing if present
}`

export { json }
