<h1 align="center">Pepe's Custom Newtab</h1>
<h3 align="center">🖌 Change your boring browser newtab for a custom one</h3>

## 👁 Demo:

<p align="center">NOTE: this is <b>WIP</b>, so consider it unfinished work</p>
<img src="./newtab-preview.png">

## 🔧 Installation

#### First of all, clone the repository:

```bash
git clone https://github.com/PepeBigotes/pepe-custom-newtab
```

### Firefox Developer

>**DOES NOT WORK FOR STANDARD FIREFOX**

1. Compress the contents of the cloned repository into a `.zip` file *(use a tool like <a href="https://www.7-zip.org/download.html">7z</a> or <a href="https://www.win-rar.com/download.html">WinRAR</a>)*. Do not include the  `.git` directory.
    >This step needs to be done every time you want to apply the changes made to the extension.
2. Type `about:config` in the URL bar. Accept the warning and continue.
3. Search for `xpinstall.signatures.required` and make sure it's set to `False`.
4. Type `about:addons` in the URL bar.
5. Click the gear icon and then "Load add-on from file"
6. Select the `.zip` file and make sure it loads properly.
    >*If the extension fails to import or doesn't work, report the logged errors in the "Issues" tab.*

### Firefox

>**LACKS PERSISTENCY: YOU NEED IMPORT THE ADD-ON EVERY NEW SESSION**

1. Same as step 1 for Firefox Developer
2. Type `about:debugging#/runtime/this-firefox` in the URL bar.
3. Open the temporary extensions menu if it's closed and click "Load Temporary Add-on".
4. Select the `.zip` file and make sure it loads properly.
    >*If the extension fails to import or doesn't work, report the logged errors in the "Issues" tab.*

### Chrome

1. Type `chrome://extensions/` into the URL bar.
2. Make sure developer mode is on (look in the top right corner).
3. Press the "Load unzipped" button and select the cloned repository.
    >*If the extension fails to import or doesn't work, report the logged errors in the "Issues" tab.*

## 🖌 Customization

>Work in progress...
<h3 align="center">Make sure to report any issues & feel free to open PR's</h3>
