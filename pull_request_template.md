# Pull Request Template

## Description
- Optimized Data Retrieval: Updated the product search function to use the select operator, ensuring only necessary columns are retrieved for improved performance.
- Temporary Response Structure: Temporarily structured the search response as a plain map to accommodate the updated functionality, including SKU parameters, categories, and tenant ID.
Approach 1: This implementation represents approach 1, focusing on data optimization and an efficient response format for product search.

## Related Issue
Fixes #30 

## Type of Change
Please select the relevant option:

- [ ] Bug fix (non-breaking change which fixes an issue)
- [x] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Code style update (formatting, renaming)
- [ ] Refactoring (no functional changes, no API changes)
- [x] Performance improvement
- [ ] Test coverage improvement
- [ ] CI/CD pipeline changes
- [ ] Other (please describe):

## How Has This Been Tested?
[Describe the tests you ran to verify your changes. Provide instructions so we can reproduce.]

## Checklist:
- [ ] My code follows the project's style guidelines
- [x] I have performed a self-review of my own code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules

## Additional Notes
[Add any additional information or context about the PR here]

## PR Status
- [ ] This PR is a draft until CI passes
- [ ] Ready for review
