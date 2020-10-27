---
id: studio-code-generation
title: Code generation
sidebar_label: Code generation
slug: /studio/code-generation
---

For.io Studio has a first-class, built-in support for code generation. There are few types of code generation that are supported, as described in the following sections.

## Occasional code generation

You can bootstrap a project by generating code from a data model and/or api specification ( `Code → Generate code` or `F4` ). This will generate data types, CRUD REST API from the types, as well as API tests for the generated endpoints. After that, the generated source code can be edited / customized (except some files which are continuously generated - see the next section). After modifying a type, you can run the code generation again. If additional types have been created since the last scaffolding, their corresponding CRUD REST API will be generated. The existing files will be overwritten, if they haven’t been modified since they were previously generated.

## Continuous code generation

As soon as you generate/scaffold the backend, a few auto-generated files will appear in your project:

- `modules.js` - keeps an up-to-date list of projects modules (from both `src` and `test` folders)

- `src/types.js` - source code of all generated data types, including data validation logic

- `src/routes.js` - aggregation of the abstract model specification of all API routes/endpoints

These files are continuously generated every time you rebuild the project. They should not be edited manually (except for debugging and experimentation). Such manual changes will result in conflicts, and need to be explicitely overwritten by you. Most of these files are based on the abstract model (please see the folder `abstract-model`), so any customization should be done by changing the abstract model.