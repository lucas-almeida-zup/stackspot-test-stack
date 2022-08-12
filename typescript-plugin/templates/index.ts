const projectName: string = '{{project_name}}'
helloStackSpot(projectName)

function helloStackSpot(projectName: string) {
    console.log(`Projeto ${projectName} criado com StackSpot!`)
    console.log('Veja mais como criar templates em: https://docs.stackspot.com/v3.7.0/docs/creators-guide/guides/howto-create-template/')
    console.log('Veja mais como criar plugins em: https://docs.stackspot.com/v3.7.0/docs/creators-guide/guides/howto-create-plugin/')
}
