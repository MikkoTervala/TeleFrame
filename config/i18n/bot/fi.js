var i18n = {
  // Language display name
  name: 'Suomi',

  // welcome reply to '/start'
  welcome: 'Tervetuloa',

  // reply to /help
  help: 'Lähetä minulle kuva tai video.\nTuetut muodot jpg, png, gif ja mp4',

  // info missing whitelist entry
  whitelistInfo: 'Tämä botti vaatii että lähettäjät sallitaan manuaalisesti. Lisää ID konfiguraatioon.',

  // info missing admin whitelist entry
  whitelistAdminInfo: 'Tämä botti vaatii että admin toiminnot sallitaan manuaalisesti. Lisää ID konfiguraatioon.',

  // reply to 'hi' requires additional parameters - use a function
  hiReply: (name, chatId) => `Moi ${name}! \nSinun lähettäjä ID on ${chatId}`,

  // The error message if the received document has unknown format
  documentFormatError: 'Lähettämäsi tiedoston muotoa ei tueta.',

  // Admin action triggered
  adminActionTriggered: (actionName) => `Triggered Action '${actionName}'`,

  // Admin action triggered execution error
  adminActionError: (actionName, errorCode, stderr) => `'${actionName}' ERROR!!!\n\nExitcode: ${errorCode}\nStdErr: ${stderr}`,

  // Admin action triggered execution success
  adminActionSuccess: (actionName, stdout) => `'${actionName}' SUCCESS!!!\n\n${stdout}`,

  // video received
  videoReceived: '\u{1F44D}\u{1F3A5}',

  // image received
  imageReceived: '\u{1F44D}\u{1F4F8}',

  // image received
  videoReceivedError: '\u{274C}\u{1F3A5}',

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
  module.exports = i18n;
}
