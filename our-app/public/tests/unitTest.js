import {
    assertFails,
    assertSucceeds,
    initializeTestEnvironment,
    RulesTestEnvironment,
  } from "@firebase/rules-unit-testing"

  let testEnv = await initializeTestEnvironment({
    projectId: "harmony-firebase-e0c11",
    firestore: {
      rules: fs.readFileSync("firestore.rules", "utf8"),
    },
  });