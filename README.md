<p align="center">
  <a href="https://www.trustdecision.com/deviceFingerprint" >
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="static/image/logo_dark.png" />
      <source media="(prefers-color-scheme: light)" srcset="static/image/logo_light.png" />
      <img src="static/image/logo_dark.png" alt="trustdevice logo" width="729px" height="67px"/>
      </picture>
  </a>
</p>

## TrustDevice-JS

<p align="center">
  <a href="https://www.npmjs.com/package/@trustdevicejs/trustdevice-js">
    <img src="https://img.shields.io/npm/v/@trustdevicejs/trustdevice-js.svg" alt="Current NPM version">
  </a>
  <a href="https://www.npmjs.com/package/@trustdevicejs/trustdevice-js">
    <img src="https://img.shields.io/npm/dm/@trustdevicejs/trustdevice-js.svg" alt="Monthly downloads from NPM">
  </a>
  <a href="https://www.jsdelivr.com/package/npm/@trustdevicejs/trustdevice-js">
    <img src="https://img.shields.io/jsdelivr/npm/hm/@trustdevicejs/trustdevice-js.svg" alt="Monthly downloads from jsDelivr">
  </a>
</p>

A lightweight library for determining device uniqueness and risk identification.

Create a device identifier based on basic device information.

Will remain the same after uninstalling and reinstalling or clearing browser data.

🪧Attention🪧：The functions of the basic version of github are relatively limited. 

You can visit [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-5fkjqqnkoajcs?sr=0-1&ref_=beagle&applicationId=AWSMPContessa) or [TrustDecision](https://trustdecision.com/solutions/device-fingerprint)  to learn about our professional version.

[Open Source Demo](https://statictest.tongdun.net/trustdevice/index.html)

### Browser support

- Internet Explorer 9+
- Edge 12+
- Chrome 33+
- Firefox 29+
- Desktop Safari 7.1+
- Mobile Safari 8+
- Android Browser 4.4+

## Integration Description

```html
<script>
    (function () {
      window._fmOpt = {
        success: function (result) {
          console.log('deviceId: ', result.deviceId)
        }
      }
      var fm = document.createElement('script');
      fm.type = 'text/javascript';
      fm.async = true;
      fm.src =
      './dist/fm.js?t='
      + (new Date().getTime()/3600000).toFixed(0);
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(fm, s);
    })();
  </script>
```
## Open Source Features

+ Basic device ID, consistent when uninstalling applications and reinstalling.
+ Basic equipment information, which can be used for simple data analysis.
+ Basic risk identification ability

| RiskLabel      |       Risk Description |
| --------- | --------------------------- |
| disabledCookie   |    Cookies are set to disable.      |
| debugger   |  The attacker or developer opens the browser developer tool for debugging.         |

## Open Source VS Pro
| Ability | Open Source |  Pro  |
| :-------: | :-------: | :-------------------------: |
| 100%open source | yes | no |
| Device ID | Basic | Extremely stable |
| Device Risk Label | Basic | Extremely rich |
| Device Details | Basic  | Extremely rich |
| IP Location | -  | ✓ |
| Device Risk Score | -  | ✓ |
| Environment Risk Evaluation | -  | ✓ |
| Fraud Tools Detection | -  | ✓|
| Behavioral Activity Capturing | -  | ✓ |

## Pro Introduction

TrustDecision TrustDevice has the leading device fingerprint technology, which has been integrated by more than 10000 global leading brands, protecting the entire customer journey.

<p align="left">
  <a href="https://www.trustdecision.com/solutions/trustdevice">
    <img src="static/image/trustdevice_card.png" alt="trustdevice card"  />
  </a>
</p>

**There are 6 leading core features about TrustDevice Pro:**

### 1. Wide Coverage
Comprehensive coverage of Android, iOS, Web, H5, applets and other device types.

### 2. Stable and Reliable
TrustDevice served more than 10,000 clients, 200 million+ daily active users , and 6 billion+ devices , with excellent product functions and stability.
The fingerprint accuracy of different terminal devices exceeded 99.9%, and the output of risk labels exceeded 70 items.

### 3. Unparalleled Safety
TrustDevice's code virtualization & obfuscation technology make the malware fraudsters suffer from painful cost and imprecision when performing reverse-engineering.

### 4. Core Intellectual Property
Fully independent intellectual property rights, with a number of patented technology.

### 5. Security Compliance
TrustDevice is committed to the highest standards in security and compliance to keep your data safe.
GDPR/CCA/PCI DSS/ISO 27701/ISO 9001 Compliant.

### 6. Easy to Deploy
SaaS（Software as a Service）deployment supported, reducing massively your integration cost and enabling rapid access to device fingerprint service.



# Where to get support
We are happy to provide technical support for our open-source trustdevice-js library. We recommend using GitHub Issues to submit bugs or Discussions to ask questions. Using [issues](https://github.com/trustdecision/trustdevice-js/issues) and [discussions](https://github.com/trustdecision/trustdevice-js/discussions) publicly will help the open-source community and other users with similar issues.

In addition, any idea or interest in using TrustDevice Pro can be found on the official website（ [https://www.trustdecision.com/solutions/trustdevice](https://www.trustdecision.com/solutions/trustdevice) ）, registered account, free trial; Or via email（ TrustDevice@TrustDecision.com ）, contact us directly and quickly open the service.

## TrustDevice Pro VS Others
<table>
  <tr align="center">
      <th>Type</th><th>Scene</th><th>Result</th><th>TrusDevice Pro</th><th>Fingerprint</th><th>Seon</th>
  </tr>
  <tr align="center">
      <td>Device Fingerprint Compatibility</td><td>IE9 and above</td><td>Able to collect device info and generate device ID</td><td>✅</td><td>❌ (not supported by IE)</td><td>❌ (IE10 and below are not supported)</td>
  </tr>
  <tr align="center">
      <td rowspan="2">Device fingerprint uniqueness</td><td>Access web application twice using browser on the same device</td><td>Device fingerprints/ID matches </td><td>✅</td><td>✅</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>Access web application using browser on two different devices</td><td>Device fingerprint/ID should not match. Each device to have its own unique device fingeprint/ID</td><td>✅</td><td>✅</td><td>✅</td>
  </tr>
  <tr align="center">
      <td rowspan="4">Device Fingerprint Stability</td><td>Clears the browser cache and cookies</td><td>Device fingerprints/ID still matches before and after clearing</td><td>✅</td><td>✅</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>Incognito and non-incognito mode on the same device browser</td><td>Device fingerprints/ID match</td><td>✅</td><td>✅</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>The same device browser before and after User-Agent modification</td><td>Device fingerprints/ID match</td><td>✅</td><td>✅</td><td>❌</td>
  </tr>
  <tr align="center">
    <td>Before and after browser upgrade on the same device</td><td>Device fingerprints/ID match</td><td>✅</td><td>✅</td><td>✅</td>
  </tr>
  <tr align="center">
     <td rowspan="9">Device Fingerprint Risk Identification</td><td>Web crawlers (bot attacks)</td><td>Ability to identify web crawlers (bot attacks)</td><td>✅</td><td>❌</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>Incognito mode</td><td>Ability to recognize that the browser is in incognito mode/private browsing</td><td>✅</td><td>✅</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>Headless browser (Chrome Headless、phantomJS、selenium、puppeteer)</td><td>Able to identify the risk of use of headless browser</td><td>✅</td><td>❌</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>Abnormal user-agent</td><td>Ability to identify UA anomalies</td><td>✅</td><td>❌</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>JS is debugged</td><td>Can identify debugging behavior on JS</td><td>✅</td><td>❌</td><td>❌</td>
  </tr>
  <tr align="center">
    <td>JS is tampered with</td><td>Can identify tampering</td><td>✅</td><td>❌</td><td>❌</td>
  </tr>
  <tr align="center">
    <td>Do not use cookies</td><td>Ability to recognize the prohibition of the use of cookies</td><td>✅</td><td>❌</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>Browser parameters have been tampered with</td><td>Can identify browser environment tampering</td><td>✅</td><td>❌</td><td>✅</td>
  </tr>
  <tr align="center">
    <td>Common browser cheating plug-ins</td><td>Can identify common cheating plug-in risks</td><td>✅</td><td>❌</td><td>✅</td>
  </tr>
  <tr align="center">
        <td rowspan="3">Security and Stability</td><td>Code Protection</td><td>The device fingerprint SDK and JS have code protection mechanisms (such as VMP), which effectively resist black hat cracking attempts to manipulate code logic and falsify data</td><td>✅ (VMP)</td><td>❌</td><td>❌</td>
    </tr>
    <tr align="center">
        <td>Downgrade</td><td>Intercepting and sending collection requests in the Web environment can still generate device fingerprints normally</td><td>✅</td><td>✅</td><td>✅</td>
    <tr align="center">
        <td>Anti packet capture</td><td>Web (including iOS and android web) have the ability to prevent packet capture</td><td>✅</td><td>❌</td><td>❌</td>
    </tr>
</table>

## License

This library is MIT licensed. Copyright trustdecision, Inc. 2022.

