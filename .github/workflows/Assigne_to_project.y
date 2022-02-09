name: Auto Assign Issue to project
on: [
  issues,
]
jobs:
  main:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: assing issue to project
        uses: AlexisMateo/issue-to-project-action@0.0.1
        with:
          github-token: ${{ secrets.TOKEN }}
          project_path: 'https://github.com/orgs/darthC0de/projects/3'
    

