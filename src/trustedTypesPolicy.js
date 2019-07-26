let componentPolicy

export function getPolicy() {
  if (componentPolicy === undefined) {
    componentPolicy = TrustedTypes.createPolicy('app', {
      createHTML(s) {
        console.log('TT app html', s)
        return s;
      },
      createURL(s) {
        console.log('TT app url', s)
        return s;
      },
      createScriptURL(s) {
        console.log('TT app script url', s)
        return s;
      },
      createScript(s) {
        console.log('TT app script', s)
        return s;
      },
    });
  }
  return componentPolicy
}