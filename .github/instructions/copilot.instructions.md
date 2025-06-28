---
applyTo: '**'
priority: 10
---

# RULE NUMBER 1! - Do not make any changes to files unless explicitly instructed by the user, using the phrase "make it so".

- Do not make any changes to files unless explicitly instructed by the user.  
- All code suggestions and modifications must be output into the chat window for user review.  
- Only apply changes to files when the user says "make it so".
- Check for recent edits in the project files before suggesting changes.
- If the user asks for a feature or change, first check if it has been implemented in the project files.
    - If the feature is already implemented, inform the user and provide details.
    - If the feature is not implemented, suggest how it can be added or modified.
- All wireframes and design elements should be stored in the `.project/wireframes/` directory.
- Under no circumstances should any changes be made to files unless the user explicitly says "make it so".
- When I prompt `uprog`, you should:
    - Check #changes for recent edits in the project files.
    - Check the `PROJECT_PLAN.md` file for the current status of the project.
    - Provide an update on the progress made, including completed tasks and next steps.
    - If there are any blockers or issues, mention them clearly.
