@font-face {
  font-family: "Geforce bold";
  src: url(./fonts/Geforce\ Bold.ttf);
}
@font-face {
  font-family: "Geforce light";
  src: url(./fonts/Geforce\ Light.ttf);
}
@font-face {
  font-family: "Trebuchet bold italic";
  src: url(./fonts/Trebuchet\ Bold\ Italic.ttf);
}
@font-face {
  font-family: "Trebuchet bold";
  src: url(./fonts/Trebuchet\ Bold.ttf);
}
@font-face {
  font-family: "Trebuchet italic";
  src: url(./fonts/Trebuchet\ Italic.ttf);
}
@font-face {
  font-family: "Trebuchet";
  src: url(./fonts/Trebuchet.ttf);
}
@font-face {
  font-family: "DINpro light";
  src: url(./fonts/DINPro-Light.ttf);
}
@font-face {
  font-family: "DINpro regular";
  src: url(./fonts/DINPro-Regular.ttf);
}
@font-face {
  font-family: "Geforce bold";
  src: url(./fonts/Geforce\ Bold.ttf);
}
@font-face {
  font-family: "Geforce light";
  src: url(./fonts/Geforce\ Light.ttf);
}
@font-face {
  font-family: "Trebuchet bold italic";
  src: url(./fonts/Trebuchet\ Bold\ Italic.ttf);
}
@font-face {
  font-family: "Trebuchet bold";
  src: url(./fonts/Trebuchet\ Bold.ttf);
}
@font-face {
  font-family: "Trebuchet italic";
  src: url(./fonts/Trebuchet\ Italic.ttf);
}
@font-face {
  font-family: "Trebuchet";
  src: url(./fonts/Trebuchet.ttf);
}
@font-face {
  font-family: "DINpro light";
  src: url(./fonts/DINPro-Light.ttf);
}
@font-face {
  font-family: "DINpro regular";
  src: url(./fonts/DINPro-Regular.ttf);
}
.rpFortniteSection {
  background-image: url("./Source/assetsFortnite/FortniteBackgroundBig2.jpg");
  background-size: cover;
  background-position: center center;
  vertical-align: middle;
}
.rpFortniteSection .rpFortniteCenter {
  margin: auto;
  max-width: 1440px;
}
.rpFortniteSection .rpContentContainer {
  width: 450px;
  height: 600px;
  vertical-align: middle;
  margin-left: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
  padding-bottom: 20px;
}
.rpFortniteSection .rpContentContainer .rpContentTitle {
  font-size: 40px;
  font-family: "Geforce bold";
  font-weight: bold;
  line-height: 40px;
}
.rpFortniteSection .rpContentContainer .rpContentParagraph {
  font-size: 16px;
  font-family: "DINpro light";
}

@media screen and (min-width: 0px) and (max-width: 999.99px) {
  .rpFortniteSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("./Source/assetsFortnite/FortniteBackgroundCentral.jpg");
    background-size: cover;
    background-position: center center;
    height: 600px;
  }
  .rpFortniteSection .rpContentContainer {
    background-color: white;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    gap: 5px;
  }
  .rpFortniteSection .rpContentContainer .rpContentTitle {
    text-align: center;
    font-size: 20px;
    font-family: "Geforce bold";
    line-height: 40px;
  }
  .rpFortniteSection .rpContentContainer .rpContentParagraph {
    padding: 0px 25px;
    font-size: 12px;
    font-family: "DINpro light";
    text-align: center;
  }
}
@media screen and (max-width: 992px) {
  .rpFortniteSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url("./Source/assetsFortnite/FortniteBackgroundDueDue.jpg");
    background-size: cover;
    background-position: center center;
    height: 900px;
  }
  .rpFortniteSection .rpContentContainer {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
}
.alert-warning {
  box-shadow: 0 0 4px #888;
  position: fixed;
  margin: auto;
  z-index: 2147483647;
  width: 400px;
  height: 170px;
  background-color: white !important;
  border: none;
  border-radius: 0 !important;
}
.alert-warning .ad-alert-content {
  gap: 15px;
}
.alert-warning .ad-alert-content h3 {
  font-family: "Geforce bold";
  font-size: 16px;
}
.alert-warning .ad-alert-content p {
  font-family: "Geforce light";
  font-size: 14px;
}
.alert-warning .btn-alert-container {
  display: flex;
  justify-content: flex-end;
}
.alert-warning .btn-alert-container .ad-btn-alert-one {
  width: 78px;
  height: 40px;
  margin-right: 10px;
  border: none;
  background-color: white;
  color: #76B900;
}
.alert-warning .btn-alert-container .ad-btn-alert-two {
  width: 58px;
  height: 40px;
  border: none;
  background-color: #76B900;
  color: white;
}

#MG-sec-porta-esperienza {
  display: flex;
  flex-direction: row;
  padding: 0 30px;
  margin-bottom: 70px;
}
#MG-sec-porta-esperienza #MG-container-esperienza {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
#MG-sec-porta-esperienza #MG-container-esperienza #MG-bg-joystick-img {
  width: 30%;
}
#MG-sec-porta-esperienza #MG-container-esperienza #MG-esperienza-par {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
}
#MG-sec-porta-esperienza #MG-container-esperienza #MG-esperienza-par .textLeft {
  text-align: left;
}
#MG-sec-porta-esperienza #MG-container-esperienza #MG-esperienza-par .alignLeft {
  align-self: flex-start;
  margin-top: 25px;
}
#MG-sec-porta-esperienza #MG-container-esperienza #MG-h1-porta-esperienza {
  font-size: 44px;
  color: white;
  line-height: 40px;
  font-family: "Geforce light";
  line-height: 50px;
}
#MG-sec-porta-esperienza #MG-container-esperienza #MG-p-porta-esperienza {
  font-size: 20px;
  line-height: 24px;
  color: white;
  font-family: "DINPro light";
  line-height: 35px;
}

@media screen and (max-width: 992px) {
  #MG-sec-porta-esperienza #MG-container-esperienza {
    flex-direction: column;
  }
  #MG-sec-porta-esperienza #MG-container-esperienza #MG-bg-joystick-img {
    width: 80%;
  }
  #MG-sec-porta-esperienza #MG-container-esperienza #MG-esperienza-par {
    width: 95%;
  }
}
.container-country-region {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 740px;
  height: auto;
  box-shadow: 0 0 4px #888;
  position: fixed;
  left: 710px;
  top: 172px;
  z-index: 2147483647;
  background-color: white;
  border: none;
  border-radius: 0;
}
.container-country-region .header-container-lingua {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}
.container-country-region .header-container-lingua p {
  text-align: center;
  font-weight: bold;
}
.container-country-region .header-container-lingua .button-region {
  width: 80px;
  height: 50px;
  padding: 13px 15px 8px;
  font-size: 18px;
  font-weight: bold;
  background-color: rgb(118, 185, 0);
  color: white;
  border: none;
}
.container-country-region .list-region {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.container-country-region a {
  margin: 10px;
  color: rgb(118, 185, 0) !important;
  text-decoration: none;
  font-family: "Geforce bold";
}

@font-face {
  font-family: "Geforce bold";
  src: url(./fonts/Geforce\ Bold.ttf);
}
@font-face {
  font-family: "Geforce light";
  src: url(./fonts/Geforce\ Light.ttf);
}
@font-face {
  font-family: "Trebuchet bold italic";
  src: url(./fonts/Trebuchet\ Bold\ Italic.ttf);
}
@font-face {
  font-family: "Trebuchet bold";
  src: url(./fonts/Trebuchet\ Bold.ttf);
}
@font-face {
  font-family: "Trebuchet italic";
  src: url(./fonts/Trebuchet\ Italic.ttf);
}
@font-face {
  font-family: "Trebuchet";
  src: url(./fonts/Trebuchet.ttf);
}
@font-face {
  font-family: "DINpro light";
  src: url(./fonts/DINPro-Light.ttf);
}
@font-face {
  font-family: "DINpro regular";
  src: url(./fonts/DINPro-Regular.ttf);
}
.ad-container-one {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto 0;
}
.ad-container-one #ad-a-green {
  color: #76B900 !important;
}
.ad-container-one .ad-container {
  background-color: #2b2b2b;
  width: 648px;
  height: 423px;
}
.ad-container-one .ad-container .ad-text-content {
  margin-top: 40px;
}
.ad-container-one .ad-container .ad-logo-Nvidia {
  margin-top: 50px;
  width: 164px;
  height: 30px;
}
.ad-container-one .ad-container .ad-wf-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ad-container-one .ad-container .ad-wf-content .ad-storage {
  display: flex;
  justify-content: space-between;
  width: 420px;
  height: 48px;
  outline: none;
  border: 1px solid #333333;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px -3px;
  padding: 0 15px;
}
.ad-container-one .ad-container .ad-wf-content .ad-storage input {
  background-color: #2b2b2b;
  border: none;
  outline: none;
  color: white;
}
.ad-container-one .ad-container .ad-wf-content .ad-storage ::placeholder {
  color: white;
}
.ad-container-one .ad-container .ad-wf-content .ad-storage .btn {
  color: #76B900;
  border: none;
}
.ad-container-one .ad-container .ad-wf-content .btn:hover {
  border: none;
  background-color: #333333;
}
.ad-container-one .ad-container .ad-wf-content .ad-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
}
.ad-container-one .ad-container .ad-wf-content .ad-link #ad-a-green {
  color: #76B900;
}
.ad-container-one .ad-container .ad-content-box {
  margin-top: 30px;
}

.ad-block-one {
  display: flex;
  justify-content: space-between;
}
.ad-block-one select {
  background-color: transparent;
  border: none;
  color: white;
  cursor: pointer;
}
.ad-block-one select option {
  background-color: #2b2b2b;
  color: #9e9e9e;
  cursor: pointer;
}
.ad-block-one #a-white {
  margin-right: 10px;
  color: white;
}

.ad-block-tow span {
  color: #666;
  font-size: 12px;
}

@media all and (max-width: 1100px) {
  .ad-container {
    max-width: 100%;
  }
  .ad-block-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100% !important;
  }
  .ad-block-one select {
    margin: auto;
    width: 80px;
  }
  .ad-block-one #ad-footer-link {
    margin: auto;
  }
  .ad-block-tow span {
    display: flex;
    justify-content: center;
    margin: auto;
  }
}
@media all and (max-width: 648px) {
  .ad-container {
    max-width: 100%;
    background-color: transparent !important;
  }
  .ad-container input {
    background-color: transparent !important;
  }
  .ad-block-one {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 100% !important;
  }
  .ad-block-one select {
    margin: auto;
    width: 80px;
  }
  .ad-block-one #ad-footer-link {
    margin: auto;
  }
  .ad-block-tow span {
    display: flex;
    justify-content: center;
  }
}
.navbar-dark {
  background-color: black !important;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-dark .container-fluid {
  width: 1400px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-dark .container-fluid .navbar-brand {
  font-size: 36px;
  font-weight: bold;
}
.navbar-dark .container-fluid .offcanvas-end {
  top: 120px;
}
.navbar-dark .container-fluid .offcanvas-body {
  width: 250px;
}
.navbar-dark .container-fluid .nav-link {
  color: grey !important;
  text-decoration: none;
  font-size: 22px;
}
.navbar-dark .container-fluid .nav-link:hover {
  color: #76B900 !important;
}
.navbar-dark .container-fluid .offcanvas {
  background-color: black;
}
.navbar-dark .container-fluid .offcanvas .btn-close {
  color: white;
  font-size: 25px;
}
.navbar-dark .container-fluid .navbar-toggler {
  border: none;
}

@media all and (max-width: 913px) {
  .navbar-dark .container-fluid .navbar-brand {
    font-size: 24px;
  }
}
@media all and (max-width: 448px) {
  .bnt-hidden {
    display: none;
  }
}
.rpArticleNuovaGen {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 800px;
}
.rpArticleNuovaGen .rpTitleNuovaGen {
  width: 100%;
  text-align: center;
  margin-top: 80px;
}
.rpArticleNuovaGen .rpTitleNuovaGen .rpH2NuovaGen {
  font-size: 52px;
  font-family: "Geforce bold";
  color: white;
  margin: 0px;
}
.rpArticleNuovaGen .rpTitleNuovaGen .rpPNuovaGen {
  font-size: 28px;
  color: white;
  font-family: "DINpro light";
  margin-top: 20px;
}
.rpArticleNuovaGen .rpBgContainerNuovaGen {
  width: 100%;
  height: 800px;
  background-image: url("./Source/assetsNuovaGen/geforce-now-platform-2560x580-d.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

@media screen and (max-width: 1023.99px) {
  .rpArticleNuovaGen {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 700px;
  }
  .rpArticleNuovaGen .rpTitleNuovaGen {
    width: 100%;
    text-align: center;
    margin-top: 80px;
    padding: 0px 15px;
  }
  .rpArticleNuovaGen .rpTitleNuovaGen .rpH2NuovaGen {
    font-size: 42px;
    font-family: "Geforce bold";
    color: white;
    margin: 0px;
  }
  .rpArticleNuovaGen .rpTitleNuovaGen .rpPNuovaGen {
    font-size: 18px;
    color: white;
    font-family: "DINpro light";
    margin-top: 15px;
  }
  .rpArticleNuovaGen .rpBgContainerNuovaGen {
    width: 100%;
    height: 800px;
    background-image: url("./Source/assetsNuovaGen/geforce-now-platform-1024x440-t@2x.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
@media screen and (min-width: 0px) and (max-width: 639.99px) {
  .rpArticleNuovaGen {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    height: 600px;
    padding: 0px;
  }
  .rpArticleNuovaGen .rpTitleNuovaGen {
    width: 100%;
    text-align: center;
    margin-top: 80px;
  }
  .rpArticleNuovaGen .rpTitleNuovaGen .rpH2NuovaGen {
    font-size: 32px;
    font-family: "Geforce bold";
    color: white;
    margin: 0px;
  }
  .rpArticleNuovaGen .rpTitleNuovaGen .rpPNuovaGen {
    font-size: 12px;
    color: white;
    font-family: "DINpro light";
    margin-top: 12px;
  }
  .rpArticleNuovaGen .rpBgContainerNuovaGen {
    width: 100%;
    height: 800px;
    background-image: url("./Source/assetsNuovaGen/geforce-now-platform-767x440-p@2x.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
.rpArticleGetIn {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}
.rpArticleGetIn .rpTitleGetIn {
  margin-bottom: 50px;
  margin-left: 12px;
}
.rpArticleGetIn .rpH2GetIn {
  color: white;
  font-size: 40px;
  font-family: "Geforce bold";
  margin-top: 50px;
  padding-bottom: 20px;
}
.rpArticleGetIn .rpDescriptionGetIn {
  color: #76B900 !important;
  font-size: 14px;
}
.rpArticleGetIn .rpImagesContainerGetIn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 190px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn img {
  margin: 0;
  width: 95px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn p:nth-child(odd) {
  color: #76B900;
  padding: 5px 0px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  font-family: "DINpro light";
  margin-top: -10px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn p:nth-child(even) {
  color: white;
  font-family: "Geforce bold";
  font-size: 32px;
  margin-bottom: 10px;
  text-align: center;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 190px;
  gap: 15px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn img {
  margin: 0;
  width: 95px;
  margin: auto;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn p:nth-child(odd) {
  color: #76B900;
  padding: 5px 0px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  font-family: "DINpro light";
  margin-top: -10px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn p:nth-child(even) {
  color: white;
  font-family: "Geforce bold";
  font-size: 32px;
  text-align: center;
  margin-bottom: 10px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn img {
  margin: 0;
  width: 95px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn p:nth-child(odd) {
  color: #76B900;
  padding: 5px 0px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  font-family: "DINpro light";
  margin-top: -10px;
}
.rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn p:nth-child(even) {
  color: white;
  text-align: center;
  font-family: "Geforce bold";
  font-size: 32px;
  margin-bottom: 10px;
}

@media screen and (min-width: 640px) and (max-width: 1023.99px) {
  .rpArticleGetIn {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .rpArticleGetIn .rpTitleGetIn {
    margin-bottom: 50px;
    margin-left: 0px;
  }
  .rpArticleGetIn .rpH2GetIn {
    color: white;
    font-size: 40px;
    font-family: "Geforce bold";
    padding-bottom: 20px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn img {
    margin: 0;
    width: 95px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn p:nth-child(odd) {
    color: #76B900;
    padding: 5px 0px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: "DINpro light";
    margin-top: -10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn p:nth-child(even) {
    color: white;
    font-family: "Geforce bold";
    font-size: 32px;
    margin-bottom: 10px;
    text-align: center;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn img {
    margin: 0;
    width: 95px;
    margin: auto;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn p:nth-child(odd) {
    color: #76B900;
    padding: 5px 0px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: "DINpro light";
    margin-top: -10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn p:nth-child(even) {
    color: white;
    font-family: "Geforce bold";
    font-size: 32px;
    text-align: center;
    margin-bottom: 10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn img {
    margin: 0;
    width: 95px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn p:nth-child(odd) {
    color: #76B900;
    padding: 5px 0px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-family: "DINpro light";
    margin-top: -10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn p:nth-child(even) {
    color: white;
    text-align: center;
    font-family: "Geforce bold";
    font-size: 32px;
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 639.99px) {
  .rpArticleGetIn {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .rpArticleGetIn .rpTitleGetIn {
    margin-bottom: 50px;
    margin-left: 0px;
  }
  .rpArticleGetIn .rpH2GetIn {
    color: white;
    font-size: 40px;
    font-family: "Geforce bold";
    padding-bottom: 20px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn img {
    margin: 0;
    width: 95px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn p:nth-child(odd) {
    color: #76B900;
    padding: 5px 0px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: "DINpro light";
    margin-top: -10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpFirstLogoGetIn p:nth-child(even) {
    color: white;
    font-family: "Geforce bold";
    font-size: 32px;
    margin-bottom: 10px;
    text-align: center;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn img {
    margin: 0;
    width: 95px;
    margin: auto;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn p:nth-child(odd) {
    color: #76B900;
    padding: 5px 0px;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: "DINpro light";
    margin-top: -10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpSecondLogoGetIn p:nth-child(even) {
    color: white;
    font-family: "Geforce bold";
    font-size: 32px;
    text-align: center;
    margin-bottom: 10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn img {
    margin: 0;
    width: 95px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn p:nth-child(odd) {
    color: #76B900;
    padding: 5px 0px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-family: "DINpro light";
    margin-top: -10px;
  }
  .rpArticleGetIn .rpImagesContainerGetIn .rpTHirdLogoGetIn p:nth-child(even) {
    color: white;
    text-align: center;
    font-family: "Geforce bold";
    font-size: 32px;
    margin-bottom: 10px;
  }
}
#a,
#ad-span {
  color: #666666 !important;
  text-decoration: none;
}

.AD-content {
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  width: 90%;
}
.AD-content .ad-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}
.AD-content .ad-logo .ad-nvidia-logo {
  width: 110px;
  height: 20px;
  margin: 15px;
}
.AD-content .ad-logo .ad-global-footer-region .ad-global-footer__region__label {
  width: 780px;
  height: 20px;
  text-align: center;
  color: #888;
  text-decoration: none;
  margin: 20px;
}
.AD-content .ad-logo .ad-copyright {
  margin: 0 auto;
  padding-top: 1rem;
  position: relative;
  right: 193px;
}

@media all and (max-width: 1350px) {
  .ad-footer-content {
    height: auto;
  }
  .ad-subscribe {
    flex-direction: column;
  }
  .ad-subscribe .ad-social {
    margin-left: 430px;
  }
  .ad-global-footer-region .ad-logo {
    flex-direction: column;
    align-items: center;
  }
  .ad-global-footer-region .ad-logo .ad-nvidia-logo {
    right: 0;
  }
  .ad-global-footer-region .ad-global-footer__region__label {
    left: 0;
    font-weight: bold;
    color: #888;
  }
}
@media all and (max-width: 1024px) {
  .AD-content {
    width: 90%;
  }
  .AD-content .ad-logo {
    flex-direction: column;
    align-items: center;
  }
  .AD-content .ad-logo .ad-nvidia-logo {
    right: 0;
  }
  .AD-content .ad-logo .ad-global-footer__region__label {
    font-weight: bold;
    color: #888;
  }
  .AD-content .ul-align {
    text-align: center !important;
  }
  .AD-content .ul-align li {
    display: inline-block;
  }
  .AD-content .ad-copyright {
    text-align: center !important;
    margin: 0 auto;
  }
}
.mg-follow-social {
  width: 100%;
  height: 215px;
  background-color: #302d2d;
  display: flex;
  flex-direction: column;
}

.mg-h1-social {
  margin-top: 50px !important;
  font-size: 32px;
  color: white;
  font-family: "Geforce bold";
  margin: 30px auto;
}

.mg-container-socialIcons {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  height: 200px;
}

.mg-social-icons {
  width: 50px;
  height: 50px;
  margin: 10px;
}

.sv-alert-warning {
  background-color: #76b900 !important;
  border: none;
  border-radius: 0 !important;
  color: black !important;
  display: flex;
  justify-content: center;
}
.sv-alert-warning #sv-banner {
  color: black;
  text-decoration: underline;
}
.sv-alert-warning a {
  color: black !important;
}

.resw {
  width: 70%;
  margin: auto;
}

.ad-padding {
  max-width: 1300px;
  width: 90%;
  font-family: "DINpro regular";
}
.ad-padding .styletype {
  list-style-type: none;
}
.ad-padding .styletype a {
  text-decoration: none;
  color: #76B900 !important;
}
.ad-padding .styletype #img-none {
  display: none;
}
.ad-padding .ad-subscrib {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 25px;
}
.ad-padding .ad-subscrib .ad-subscribe-content {
  position: relative;
  display: flex;
  color: white;
  align-items: center;
  gap: 25px;
}
.ad-padding .ad-subscrib .ad-window-form {
  position: fixed;
  top: 250px;
  left: 500px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container {
  width: 994px;
  height: 375px;
  padding: 60px 0;
  background-color: #1a1a1a;
  position: relative;
  z-index: 9999;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content {
  margin: 0 80px;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content #ad-box-close {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  background-color: #666;
  color: white;
  width: 25px;
  height: 25px;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content h2 {
  font-size: 40px;
  color: #76B900;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content p {
  font-size: 16px;
  color: white;
  padding: 0 0 22px 0;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content .ad-mail {
  width: 798px;
  height: 82px;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content .ad-mail input {
  width: 830px;
  height: 52px;
  outline: none;
  border: 1px solid grey;
  padding: 0 15px;
  background-color: #1a1a1a;
  color: white;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content input:hover {
  border: 2px solid #76B900;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content .ad-a-btn {
  display: flex;
  justify-content: space-between;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content .ad-a-btn a {
  padding: 10px 0;
  color: #76B900;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content .ad-a-btn button {
  width: 75px;
  height: 45px;
  border: 1px solid #76B900;
}
.ad-padding .ad-subscrib .ad-window-form .ad-wf-container .ad-wf-content .ad-a-btn button:hover {
  background-color: #6AA700;
  cursor: pointer;
}
.ad-padding .ad-subscrib .ad-registrati:hover {
  cursor: pointer;
  background-color: #76D900;
}
.ad-padding .ad-subscrib .ad-social {
  display: flex;
  gap: 1rem;
}

@media (max-width: 991px) {
  .ad-subscrib {
    flex-direction: column !important;
    align-items: center;
  }
  .ad-subscrib .ad-subscribe-content {
    position: relative;
    flex-direction: column;
  }
  .ad-subscrib .ad-social {
    margin-top: 20px;
  }
}
#AD-section-sologeforce {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}
#AD-section-sologeforce #AD-container-title #AD-h2-title {
  font-size: 40px;
  font-family: "Geforce bold";
  color: white;
  margin-bottom: 40px;
}
#AD-section-sologeforce .mg-div-microcard {
  width: 85vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 100px;
}
#AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce {
  width: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
}
#AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-cart {
  width: 60px;
  height: 62px;
}
#AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-h3 {
  color: #76B900;
  font-family: "Geforce bold";
  font-size: 30px;
  text-align: center;
}
#AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-p-sologeforce {
  width: 16rem;
  color: white;
  font-size: 22px;
  padding: 10px 0;
  line-height: 24px;
  text-align: center;
  font-family: "Geforce light";
}
#AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-h4 {
  justify-content: center;
  color: #ffffff;
  font-family: "Geforce bold";
  font-size: 16px;
}

@media screen and (max-width: 1000px) {
  #AD-section-sologeforce {
    margin-top: 20px;
    padding: 50px;
  }
  #AD-section-sologeforce #AD-container-title #AD-h2-title {
    font-size: 32px;
  }
  #AD-section-sologeforce .mg-div-microcard {
    flex-direction: column;
    align-items: center;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce {
    gap: 25px;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-cart {
    width: 80px;
    height: 60px;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-h3 {
    font-size: 20px;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-p-sologeforce {
    font-size: 18px;
  }
}
@media screen and (max-width: 576px) {
  #AD-section-sologeforce #AD-container-title #AD-h2-title {
    font-size: 24px;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce {
    margin-bottom: 0;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-cart {
    width: 60px;
    height: 62px;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-h3 {
    font-size: 14px;
  }
  #AD-section-sologeforce .mg-div-microcard .AD-card-sologeforce .AD-p-sologeforce {
    font-size: 16px;
  }
}
.sv-citazioni {
  height: 280px;
  font-size: 20px !important;
  background-color: #1a1a1a;
  color: white;
  position: relative;
}
.sv-citazioni .sv-text-container {
  margin-top: 50px;
}
.sv-citazioni .sv-text-container .sv-text {
  width: 90%;
  font-size: 28px;
  margin: auto;
}
.sv-citazioni a {
  color: #76B900 !important;
}
.sv-citazioni #button {
  border-radius: 50%;
  height: 10px !important;
  width: 10px !important;
  background-color: #76B900 !important;
}

@media screen and (max-width: 1290px) {
  #carousel-id-new {
    width: 100%;
  }
  .position-absolute {
    top: 130px;
    left: 30px;
  }
  .sv-text {
    color: white;
    width: 285px;
  }
  .sv-text h3 {
    font-size: 38px;
  }
  .sv-text span {
    font-size: 26px;
  }
  #fortnite-banner {
    background-image: url("https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/fortnite-mobile-beta/gfn-fortnite-mobile-mfg-2560-d@2x.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 570px;
  }
  #video-header {
    height: 570px;
    width: 100%;
  }
  #video-header #video-dimension {
    height: 670px;
    width: 1560px;
  }
  #button {
    border-radius: 50%;
    width: 10px !important;
    height: 10px !important;
    background-color: #76b900 !important;
  }
}
@media screen and (min-width: 1290px) and (max-width: 1630px) {
  #carousel-id-new {
    width: 100%;
  }
  .position-absolute {
    top: 130px;
    left: 100px;
  }
  .sv-text {
    color: white;
    width: 475px;
  }
  .sv-text h3 {
    font-size: 42px;
  }
  .sv-text span {
    font-size: 30px;
  }
  #fortnite-banner {
    background-image: url("https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/fortnite-mobile-beta/gfn-fortnite-mobile-mfg-2560-d@2x.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 670px;
  }
  #video-header {
    height: 670px;
    width: 100%;
  }
  #video-header #video-dimension {
    height: 100%;
  }
  #button {
    border-radius: 50%;
    width: 10px !important;
    height: 10px !important;
    background-color: #76b900 !important;
  }
}
@media screen and (min-width: 1630px) {
  #carousel-id-new {
    width: 100%;
  }
  .position-absolute {
    top: 140px;
    left: 220px;
  }
  .sv-text {
    color: white;
    width: 600px;
  }
  .sv-text h3 {
    font-size: 48px;
  }
  .sv-text span {
    font-size: 36px;
  }
  #fortnite-banner {
    background-image: url("https://www.nvidia.com/content/dam/en-zz/Solutions/GeForce/campaigns/fortnite-mobile-beta/gfn-fortnite-mobile-mfg-2560-d@2x.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 770px;
  }
  #video-header {
    height: 770px;
    width: 100%;
  }
  #video-header #video-dimension {
    height: 100%;
  }
  #button {
    border-radius: 50%;
    width: 10px !important;
    height: 10px !important;
    background-color: #76b900 !important;
  }
}
.navcolor {
  background-color: white !important;
}

.offcanvas-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* top: 50px; */
}

.offcanvas.offcanvas-start {
  top: 60px !important;
}

.navbar-toggler {
  border: none !important;
}

#a {
  color: black;
}

#menu-arrow {
  vertical-align: middle;
  color: black;
  height: 20px;
}

.cart {
  position: relative;
}
.cart .triangle {
  position: absolute;
  left: 448px;
  top: -30px;
  z-index: 2147483647;
  width: 0;
  height: 0;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-bottom: 30px solid white;
}
.cart .cart-content {
  display: flex;
  justify-content: space-around;
  padding: 15px;
}
.cart .cart-content h2 {
  color: #76B900;
  margin-right: 250px;
}
.cart .cart-text {
  height: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.cart .cart-text p {
  color: black;
  font-size: 18px;
}

.dropdown-menu {
  width: 500px;
  margin-top: 60px !important;
  margin-right: -45px !important;
  border-radius: 0 !important;
}

::before {
  color: transparent;
}

@media all and (max-width: 995px) {
  .offcanvas-body {
    display: flex;
    flex-direction: column;
    justify-content: initial;
    align-items: initial;
  }
  .offcanvas-body .ul-left-nav {
    align-items: flex-start !important;
  }
  #lente2 {
    display: none;
  }
}
@media all and (min-width: 995px) {
  #lente1 {
    display: none;
  }
}
.TFR-container {
  flex-direction: column;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
}

.TFR-title {
  color: #76B900;
  margin: 25px;
  text-align: center;
}

.TFR-background {
  background-color: #2a2a2a;
  height: 100vh;
  padding-top: 200px;
}

.ad-logo-Nvidia {
  width: 364px;
  height: 30px;
}

.cl-container {
  width: 80%;
  background-image: url(Source/assets-cloud/geforce-now-devices-2560x770-d@2x.jpg);
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cl-container .cl-logo-container {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.cl-container .cl-logo-container .cl-container-mobile {
  display: flex;
  align-items: flex-start;
}
.cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .img-logo {
  width: 50%;
}
.cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .h2-logo {
  color: white;
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 20px;
}
.cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .p-logo {
  color: white;
  font-size: 20px;
}

@media all and (max-width: 991px) {
  .cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .img-logo {
    width: 60%;
  }
  .cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .h2-logo {
    font-size: 22px;
  }
  .cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .p-logo {
    color: white;
    font-size: 14px;
  }
}
@media screen and (max-width: 576px) {
  .cl-container .cl-logo-container .cl-container-mobile {
    flex-direction: column;
  }
  .cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .img-logo {
    width: 20%;
  }
  .cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .h2-logo {
    font-size: 16px;
  }
  .cl-container .cl-logo-container .cl-container-mobile .cl-img-container-home .p-logo {
    font-size: 10px;
  }
}
.rpGiocanoArticle {
  background-image: url(https://images.nvidia.com/aem-dam/Solutions/gfn/webassets/overview/geforce-now-video-1350-770-l@2x.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.rpGiocanoArticle .dimensioni {
  width: 40vw !important;
  max-width: 550px !important;
  height: 300px !important;
}

@media screen and (max-width: 991px) {
  .rpGiocanoArticle .dimensioni {
    width: 60vw !important;
  }
}
@media screen and (max-width: 520px) {
  .rpGiocanoArticle .dimensioni {
    width: 80vw !important;
    height: 200px !important;
  }
}
#MG-section-nuovi-giochi {
  padding-top: 120px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi #MG-title-nuovi-giochi {
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi #MG-title-nuovi-giochi #MG-paragraph-title {
  font-size: 40px;
  color: #ffffff;
  font-family: "Geforce bold";
  line-height: 0.9;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi #MG-title-nuovi-giochi #MG-paragraph-nuovi-giochi {
  font-size: 20px;
  color: #ffffff;
  margin-top: 20px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box {
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3%;
  margin-bottom: 100px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box .MG-card-nuovi-giochi {
  display: flex;
  flex-direction: column;
  width: 408px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box .MG-card-nuovi-giochi .MG-card-image {
  width: 100%;
  height: 230px;
  margin: 20px 0;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box .MG-card-nuovi-giochi .MG-latest-news {
  color: #76B900 !important;
  font-size: 22px;
  font-weight: 800;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box .MG-card-nuovi-giochi .MG-date-card {
  color: #ffffff;
  font-size: 18px;
  line-height: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box .MG-card-nuovi-giochi .MG-description-card {
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #ffffff;
  line-height: 30px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box .MG-card-nuovi-giochi .MG-info-card {
  color: #76B900 !important;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 22px;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi .MG-cards-box .MG-card-nuovi-giochi .MG-info-card:hover {
  cursor: pointer;
  color: #76B900 !important;
}
#MG-section-nuovi-giochi #MG-container-nuovi-giochi #MG-btn:hover {
  background-color: #76D900;
  cursor: pointer;
}

@media screen and (max-width: 820px) {
  .MG-cards-box {
    flex-wrap: wrap;
  }
}
#div-oltre-mille {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Stile paragrafo oltre mille giochi */
}
#div-oltre-mille #title-oltre-mille {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  text-align: center;
}
#div-oltre-mille #paragraph-oltre-mille {
  font-weight: bolder;
  font-size: 44px;
  color: black;
  height: auto;
  font-family: "Geforce bold";
  line-height: 0.9;
}
#div-oltre-mille #paragraph-title {
  font-weight: normal;
  font-size: 20px;
  color: black;
  line-height: 1.8;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.mgSliderContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-bottom: 100px;
  margin-top: 35px;
  width: 99vw;
}
.mgSliderContainer .mgSlider {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: end;
  overflow: hidden;
}
.mgSliderContainer .mgSlide-track {
  display: flex;
  width: 100%;
}
.mgSliderContainer .mgAnimation1 {
  animation: scroll 80s linear infinite;
}
.mgSliderContainer .mgAnimation2 {
  animation: scroll 70s linear infinite;
}
.mgSliderContainer .mgAnimation3 {
  animation: scroll 60s linear infinite;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-5120px);
  }
}
.mgSliderContainer .mgSlide {
  width: 5120px;
  display: flex;
  align-items: center;
  padding: 5px;
  gap: 10px;
}
.mgSliderContainer .mgImg {
  width: 5120px;
  height: 175px;
  transition: transform 1s;
  margin: 5px;
}

.container {
  padding: 90px 0;
}
.container h2 {
  font-size: 36px;
  text-align: center;
  padding: 8px;
}
.container .row {
  flex-wrap: wrap-reverse;
}
.container .row .card {
  background-color: #292929;
  border-radius: 0;
  height: 735px;
}
.container .row .card .ad-price-option {
  display: flex;
  padding: 30px 30px 0 30px;
  width: 100%;
  height: 140px;
}
.container .row .card .ad-price-option .ad-1mese {
  background-color: #76B900;
}
.container .row .card .ad-price-option .ad-6mesi {
  background-color: #545454;
}
.container .row .card .ad-price-option .ad-1mese,
.container .row .card .ad-price-option .ad-6mesi {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 27px;
  text-align: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 5px -3px, rgba(0, 0, 0, 0.15) 0px 5px 10px 0px;
}
.container .row .card .tabcontent,
.container .row .card .tabContent {
  display: none;
  text-align: center;
}
.container .row .card .tablinks,
.container .row .card .tabLinks {
  cursor: pointer;
}
.container .row .card .marginUnMese {
  margin: 15px !important;
}
.container .row .card .marginSeiMesi {
  margin: 0 !important;
}
.container .row .card .ad-price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  color: white;
}
.container .row .card .ad-price .AD-text {
  color: #76B900 !important;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.container .row .card .ad-price h3 {
  font-size: 14px;
}
.container .row .card hr {
  margin: 0 30px;
  max-width: 100%;
  border-width: 1px 0px 0px;
}
.container .row .card .ad-card-header {
  height: 77px;
  background-color: #1a1a1a;
  color: white;
  text-align: center;
  font-family: "Geforce bold";
}
.container .row .card .ad-card-header-two {
  height: 77px;
  background-color: #76B900;
  color: white;
  text-align: center;
  font-family: "Geforce bold";
}
.container .row .card .ad-card-header-three {
  height: 77px;
  background-image: url(https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/subscriptions/gfn-tier-bg-3080.png);
  color: white;
  text-align: center;
  font-family: "Geforce bold";
}
.container .row .card .ad-h2 {
  color: white;
  text-align: center;
  font-size: 40px;
  padding: 8px 0;
}
.container .row .card h3 {
  position: relative;
  top: 15px;
  color: white;
  font-size: 32px;
}
.container .row .card .ad-price > p {
  font-size: 40px;
}
.container .row .card sup {
  font-size: 18px;
}
.container .row .card ul {
  height: 261px;
}
.container .row .card ul li {
  padding-right: 30px;
  margin-bottom: 15px;
  list-style: none;
  max-width: 370px;
  padding-left: 30px;
}
.container .row .card li > img {
  max-width: 18px;
  margin-right: 10px;
}
.container .row .card span {
  color: white;
}
.container .row .card span #line {
  color: #76B900;
}
.container .row .card #ad-F-span {
  color: #999999;
}
.container .row .card .ad-card-btn {
  height: 78px;
  display: flex;
  justify-content: center;
}

footer {
  margin: 0 auto;
  padding: 0 15px;
  width: 1230px;
}
footer p {
  color: grey;
  font-size: 12px;
  line-height: 1.4;
  padding: 10px 0;
  margin: 0;
  text-align: justify;
}
footer p a {
  color: #76B900;
  text-decoration: none;
}

@media all and (max-width: 991px) and (min-width: 768px) {
  #ad-ul-one,
#ad-ul-two {
    padding: 0;
  }
  #ad-ul-three {
    margin-left: 150px;
  }
  #li {
    display: block;
  }
}
@media all and (max-width: 768px) {
  #ad-ul-one,
#ad-ul-two,
#ad-ul-three {
    margin-left: 90px;
  }
}
.container-title-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

.container-title-header-giochi {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0px 200px;
}

.title-color-white {
  color: white;
}

.title-color-black {
  color: black;
}

.title-header-one {
  font-size: 38px;
  font-family: "Geforce bold";
  text-align: center;
}

.title-header-one-giochi {
  font-size: 38px;
  font-family: "Geforce bold";
  text-align: center;
}

.title-header-two {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 100;
  font-family: "Geforce light";
  text-align: center;
  justify-content: center;
  margin-top: 15px;
}

.title-header-two-giochi {
  font-size: 18px;
  line-height: 1.3;
  font-weight: 100;
  font-family: "Geforce light";
  text-align: center;
  justify-content: center;
  margin-top: 15px;
  width: 75vw;
}

.error-logo-container {
  padding: 15px 0;
  width: 80%;
}

.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.background-error {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.error-logo-Nvidia {
  width: 364px;
  height: 30px;
}

.error-button {
  background-color: #76b900;
  color: white;
  border: none;
  position: absolute;
  bottom: 280px;
  height: 44px;
  width: 230px;
}

.ad-flex {
  display: flex !important;
  align-items: center;
}

#a-due {
  color: #76B900;
  text-decoration: none;
}

.img-system {
  margin-right: 15px;
}

.navbar {
  background-color: rgba(26, 26, 26, 0.8980392157);
  width: 100%;
  position: fixed;
}

.header-container {
  height: 300px;
  background-image: url("https://www.nvidia.com/content/dam/en-zz/Solutions/gfn/webassets/FAQ/background-hero-2560x300-d.jpg");
}
.header-container .header-content {
  display: flex;
  justify-content: center;
}
.header-container .header-content p {
  margin-top: 100px;
  font-size: 48px;
  font-family: "Geforce bold";
}

.cl-container {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.cl-container .text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
}
.cl-container .cl-img-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 210px;
}
.cl-container .cl-img-container .cl-h2-logo {
  color: white;
  font-size: 26px;
  margin-top: 5px;
  margin-left: 5px;
}
.cl-container #cl-container-mobile {
  justify-content: center;
  gap: 50px;
}
.cl-container #h2-cl-container {
  font-size: 46px;
  font-family: "Geforce bold";
  text-align: center;
  padding: 8px;
}
.cl-container #p-cl-container {
  font-size: 16px;
  text-align: center;
  padding: 8px;
}
.cl-container #cl-logo-container {
  width: 90vw;
  padding: 60px;
  gap: 50px;
}
.cl-container #lc-pc-windows {
  height: 56px;
  width: 150px;
}

.cl-p-logo {
  font-size: 15px;
  color: white;
  text-align: center;
}

@media all and (max-width: 992px) {
  .cl-container {
    margin-top: 120px;
    margin-bottom: 40px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .cl-container .text-container {
    margin-top: 50px;
    text-align: center;
  }
  .cl-container .cl-img-container {
    width: 130px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .cl-container .cl-img-container #playstore {
    margin-top: 20px;
  }
  .cl-container .cl-img-container .cl-h2-logo {
    color: white;
    font-size: 26px;
    margin-top: 5px;
    margin-left: 5px;
  }
  .cl-container .gap-div {
    margin-top: 80px;
  }
  .cl-container #cl-container-mobile {
    justify-content: center;
    gap: 50px;
  }
  .cl-container #h2-cl-container {
    font-size: 36px;
    font-family: "Geforce bold";
    text-align: center;
    padding: 8px;
  }
  .cl-container #p-cl-container {
    font-size: 16px;
    text-align: center;
    padding: 8px;
  }
  .cl-container #cl-logo-container {
    width: 90vw;
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cl-container #lc-pc-windows {
    height: 56px;
    width: 150px;
  }
  .cl-p-logo {
    font-size: 15px;
    color: white;
    text-align: center;
  }
  .cl-btn:hover {
    background-color: #76D900;
  }
}
@media screen and (max-width: 768px) {
  .cl-container {
    margin-top: 150px !important;
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    text-align: center;
  }
  .cl-container .text-container {
    margin-top: 50px;
    text-align: center;
  }
  .cl-container #cl-logo-container {
    display: flex !important;
    flex-direction: column !important;
    height: 100% !important;
  }
  .cl-container #cl-container-mobile {
    display: flex !important;
    flex-direction: column !important;
    align-items: center;
  }
  .cl-container #playstore {
    margin: 0 !important;
  }
  .cl-container .cl-h2-logo {
    color: white !important;
    font-size: 26px !important;
    margin-top: 5px !important;
    margin-left: 5px !important;
  }
  .cl-container #p-cl-container {
    font-size: 16px !important;
    text-align: center !important;
    padding: 40px !important;
  }
  .cl-p-logo {
    font-size: 15px !important;
    color: white !important;
    text-align: center !important;
  }
}
.sv-browser {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin: 90px 0;
}
.sv-browser .sv-browser-text {
  text-align: center;
}
.sv-browser .sv-browser-icon {
  display: flex;
  justify-content: space-between;
  gap: 70px;
}
.sv-browser .sv-browser-icon .cl-img-container {
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.sv-browser .sv-browser-icon .cl-img-container .sv-img-icon {
  width: 50%;
}
.sv-browser .sv-browser-icon .cl-img-container .cl-h2-logo {
  text-align: center;
  color: white;
  font-size: 26px;
  margin-top: 5px;
  margin-left: 5px;
}
.sv-browser .sv-browser-icon .cl-img-container .cl-p-logo {
  font-size: 20px;
  color: white;
  text-align: center;
}
.sv-browser .sv-browser-icon .cl-img-container .sv-btn-container {
  display: flex;
  justify-content: center;
}
.sv-browser .sv-browser-icon .cl-img-container .sv-btn-container .sv-btn-avvia {
  width: 98px;
  height: 44px;
  background-color: #76B900;
  border: none;
  color: white;
  font-size: 20px;
}
@media screen and (max-width: 767.99px) {
  .sv-browser .sv-browser-icon {
    flex-direction: column;
  }
}

.AD-container {
  display: flex;
  gap: 40px;
  flex-direction: row !important;
  align-items: center;
}

@media all and (max-width: 1024px) {
  .AD-container {
    flex-wrap: wrap-reverse;
  }
  .AD-container img {
    width: 100%;
  }
}
.CAR-container {
  display: flex;
  flex-direction: row !important;
  gap: 40px;
}

@media all and (max-width: 1024px) {
  .CAR-container {
    flex-wrap: wrap;
  }
  .CAR-container img {
    width: 100%;
  }
}
.da-solo {
  margin: 0 auto;
  width: 80%;
  padding: 40px 0;
}
.da-solo #a-solo {
  text-decoration: none;
  color: #76B900;
  margin-left: 5px;
}

.cl-container {
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
}
.cl-container .text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  text-align: center;
}
.cl-container .cl-img-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 210px;
}
.cl-container .cl-img-container .cl-h2-logo {
  color: white;
  font-size: 26px;
  margin-top: 5px;
  margin-left: 5px;
}
.cl-container #cl-container-mobile {
  justify-content: center;
  gap: 50px;
}
.cl-container #h2-cl-container {
  font-size: 46px;
  font-family: "Geforce bold";
  text-align: center;
  padding: 8px;
}
.cl-container #p-cl-container {
  font-size: 16px;
  text-align: center;
  padding: 8px;
}
.cl-container #cl-logo-container {
  width: 90vw;
  padding: 60px;
  gap: 50px;
}
.cl-container #lc-pc-windows {
  height: 56px;
  width: 150px;
}

.cl-p-logo {
  font-size: 15px;
  color: white;
  text-align: center;
}

@media all and (max-width: 992px) {
  .cl-container {
    margin-top: 120px;
    margin-bottom: 40px;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .cl-container .text-container {
    margin-top: 50px;
    text-align: center;
  }
  .cl-container .cl-img-container {
    width: 130px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .cl-container .cl-img-container #playstore {
    margin-top: 20px;
  }
  .cl-container .cl-img-container .cl-h2-logo {
    color: white;
    font-size: 26px;
    margin-top: 5px;
    margin-left: 5px;
  }
  .cl-container .gap-div {
    margin-top: 80px;
  }
  .cl-container #cl-container-mobile {
    justify-content: center;
    gap: 50px;
  }
  .cl-container #h2-cl-container {
    font-size: 36px;
    font-family: "Geforce bold";
    text-align: center;
    padding: 8px;
  }
  .cl-container #p-cl-container {
    font-size: 16px;
    text-align: center;
    padding: 8px;
  }
  .cl-container #cl-logo-container {
    width: 90vw;
    padding: 60px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cl-container #lc-pc-windows {
    height: 56px;
    width: 150px;
  }
  .cl-p-logo {
    font-size: 15px;
    color: white;
    text-align: center;
  }
  .cl-btn:hover {
    background-color: #76D900;
  }
}
@media screen and (max-width: 768px) {
  .cl-container {
    margin-top: 150px !important;
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    text-align: center;
  }
  .cl-container .text-container {
    margin-top: 50px;
    text-align: center;
  }
  .cl-container #cl-logo-container {
    display: flex !important;
    flex-direction: column !important;
    height: 100% !important;
  }
  .cl-container #cl-container-mobile {
    display: flex !important;
    flex-direction: column !important;
    align-items: center;
  }
  .cl-container #playstore {
    margin: 0 !important;
  }
  .cl-container .cl-h2-logo {
    color: white !important;
    font-size: 26px !important;
    margin-top: 5px !important;
    margin-left: 5px !important;
  }
  .cl-container #p-cl-container {
    font-size: 16px !important;
    text-align: center !important;
    padding: 40px !important;
  }
  .cl-p-logo {
    font-size: 15px !important;
    color: white !important;
    text-align: center !important;
  }
}
.sectionWidth .contenitore-query .carte-regalo-img-desktop {
  width: 250%;
  height: 100%;
}
.sectionWidth .contenitore-query .carte-regalo-img-query {
  display: none;
}
.sectionWidth .contenitore-query .overlay-right {
  left: 40%;
}
.sectionWidth .contenitore-query .carte-rtx-testo {
  width: 53%;
}

@media all and (max-width: 1025px) {
  .sectionWidth .contenitore-query .carte-regalo-img-desktop {
    display: none;
  }
  .sectionWidth .contenitore-query .carte-regalo-img-query {
    display: block;
    width: 100%;
  }
  .sectionWidth .contenitore-query .carte-rtx-testo {
    position: initial;
    width: 100%;
  }
}
.vantaggi-abbonamenti {
  padding: 60px 0 90px 0;
}
.vantaggi-abbonamenti .container {
  background-color: black;
  padding: 0 110px;
  margin: auto;
}
.vantaggi-abbonamenti .container h2 {
  font-size: 40px;
}
.vantaggi-abbonamenti .container h3 {
  font-size: 32px;
  width: 100%;
}
.vantaggi-abbonamenti .container p {
  font-size: 16px;
  padding: 10px 0;
  width: 100%;
}
.vantaggi-abbonamenti .container .fps,
.vantaggi-abbonamenti .container .accesso-veloce,
.vantaggi-abbonamenti .container .durata-estesa {
  padding: 90px 0;
}
.vantaggi-abbonamenti .container .rtx-on {
  padding: 0 0 15px 0;
}
.vantaggi-abbonamenti .container .title {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.vantaggi-abbonamenti .container .title p {
  width: 100%;
}
.vantaggi-abbonamenti .container .fps,
.vantaggi-abbonamenti .container .rtx-on,
.vantaggi-abbonamenti .container .accesso-veloce,
.vantaggi-abbonamenti .container .durata-estesa {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vantaggi-abbonamenti .container .fps .fps-logo,
.vantaggi-abbonamenti .container .fps .rtx-logo,
.vantaggi-abbonamenti .container .fps .accesso-veloce-logo,
.vantaggi-abbonamenti .container .fps .durata-estesa-logo,
.vantaggi-abbonamenti .container .rtx-on .fps-logo,
.vantaggi-abbonamenti .container .rtx-on .rtx-logo,
.vantaggi-abbonamenti .container .rtx-on .accesso-veloce-logo,
.vantaggi-abbonamenti .container .rtx-on .durata-estesa-logo,
.vantaggi-abbonamenti .container .accesso-veloce .fps-logo,
.vantaggi-abbonamenti .container .accesso-veloce .rtx-logo,
.vantaggi-abbonamenti .container .accesso-veloce .accesso-veloce-logo,
.vantaggi-abbonamenti .container .accesso-veloce .durata-estesa-logo,
.vantaggi-abbonamenti .container .durata-estesa .fps-logo,
.vantaggi-abbonamenti .container .durata-estesa .rtx-logo,
.vantaggi-abbonamenti .container .durata-estesa .accesso-veloce-logo,
.vantaggi-abbonamenti .container .durata-estesa .durata-estesa-logo {
  width: 220px;
  height: 155px;
  margin: 0 54px;
}

@media all and (max-width: 1024px) {
  .fps,
.rtx-on,
.accesso-veloce,
.durata-estesa {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
  .fps {
    flex-direction: column-reverse;
  }
  .rtx-on {
    flex-direction: column-reverse;
  }
  .accesso-veloce {
    flex-direction: column-reverse;
  }
  .durata-estesa {
    flex-direction: column-reverse;
  }
}
.sectionWidth {
  width: 80vw;
  margin: auto;
}

.carte-regalo-img {
  width: 80%;
}

.carte-regalo-testo {
  width: 40%;
}

.sfondo-carta {
  background-color: transparent !important;
}

@media all and (max-width: 1024px) {
  .sectionWidth .contenitore-query {
    align-items: center !important;
  }
  .sectionWidth .contenitore-query .carte-regalo-img {
    width: 110%;
  }
  .sectionWidth .contenitore-query .carte-regalo-testo {
    position: initial;
    width: 100%;
  }
}
.section-support {
  display: flex;
  justify-content: center;
  margin: 100px;
}
.section-support .container-support {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.section-support .container-support #container-due {
  width: 100%;
  margin-bottom: 50px;
}
.section-support .container-support .container-support-card {
  display: flex;
  text-align: center;
  justify-content: space-around;
  height: 40%;
  width: 100%;
  gap: 50px;
  margin-bottom: 50px;
}

.supporto-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  gap: 25px;
}
.supporto-container .supporto-img {
  width: 100px;
}
.supporto-container .supporto-title {
  color: #76B900;
  font-weight: 800;
  font-size: 30px;
  font-family: "Geforce bold";
  margin-top: 20px;
}
.supporto-container .div-supporto-paragraph {
  display: flex;
}
.supporto-container .div-supporto-paragraph .supporto-paragraph {
  color: white;
  font-size: 19px;
  font-family: "Geforce light";
  width: 23vw;
}
.supporto-container .div-supporto-paragraph .supporto-paragraph2 {
  color: white;
  font-size: 19px;
  font-family: "Geforce light";
  width: 15vw;
}

@media all and (max-width: 1399px) {
  .supporto-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    gap: 25px;
  }
  .supporto-container .supporto-img {
    width: 100px;
  }
  .supporto-container .supporto-title {
    color: #76B900;
    font-weight: 800;
    font-size: 30px;
    font-family: "Geforce bold";
    margin-top: 20px;
  }
  .supporto-container .div-supporto-paragraph {
    display: flex;
    width: 60vw;
  }
  .supporto-container .div-supporto-paragraph .supporto-paragraph {
    color: white;
    font-size: 19px;
    font-family: "Geforce light";
    width: 60vw;
  }
  .supporto-container .div-supporto-paragraph .supporto-paragraph2 {
    color: white;
    font-size: 19px;
    font-family: "Geforce light";
    width: 60vw;
  }
  .container-support-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    height: 50%;
    width: 100%;
    gap: 50px;
    margin-bottom: 50px;
  }
  #container-due {
    width: 100%;
    height: auto;
  }
}
.title-giochi-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#sect-giochi .carousel-inner {
  width: 100%;
  height: fit-content;
}

#sect-giochi #div-size-gfn,
#sect-giochi #div-size-legobrawls,
#sect-giochi #div-size-saints,
#sect-giochi #div-size-genshin,
#sect-giochi #div-size-guildwars {
  height: fit-content;
  width: 100%;
}

#sect-giochi #img-GFNThursday {
  height: 580px;
  object-fit: cover;
  max-width: 90%;
}

#sect-giochi #button {
  border-radius: 50%;
  height: 10px !important;
  width: 10px !important;
  background-color: #76B900 !important;
}

.button-giochi {
  border-radius: 50%;
  height: 10px !important;
  width: 10px !important;
  background-color: #76B900 !important;
}

.container-giochi {
  margin-top: 150px;
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  justify-content: center;
}

.container-text-giochi {
  max-width: 100%;
  width: 65%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 40px;
}

.container-text-giochi .paragraph-sect-giochi {
  font-size: 26px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.container-text-giochi .title-giochi {
  color: white;
  width: 100%;
  height: auto;
}

.container-text-giochi .title-giochi .h1-size {
  font-size: 48px;
  font-family: "Geforce bold";
}

.container-text-giochi .title-giochi .h2-size {
  font-size: 36px;
  font-family: "Geforce bold";
}

.container-text-giochi .second-title-giochi {
  color: white;
  width: 100%;
  height: auto;
  text-align: center;
}

.container-text-giochi .second-title-giochi #p-find-giochi {
  font-family: "Geforce bold";
  font-size: 26px;
  padding-bottom: 50px;
}

.container-text-giochi .second-title-giochi #list-giochi {
  display: flex;
  flex-direction: column;
  line-height: 18px;
}

.container-text-giochi .second-title-giochi p {
  font-size: 22px;
}

.container-text-giochi .second-title-giochi .h4-size {
  font-size: 24px;
  margin-top: 15px;
  margin-bottom: 15px;
  font-family: "Geforce bold";
}

.container-text-giochi .second-title-giochi a {
  text-decoration: none;
  color: #76b900;
  font-family: "Geforce bold";
}

#div-bar-games {
  width: 100%;
  display: flex;
  margin-bottom: 100px;
}

#div-bar-games #search-bar-games {
  margin: auto;
  width: 75%;
  height: 50px;
  background-color: black;
  border: 1px solid gray;
  font-size: 34px;
  padding: 35px;
  color: white;
}

.catalog {
  padding: 15px;
  margin: auto;
  max-width: 1440px;
  margin-top: 100px;
  margin-bottom: 100px;
}

.catalog .check {
  color: white;
  letter-spacing: 5px;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 60px;
  font-size: 42px;
  font-family: "Geforce bold";
}

.catalog .accordion .accordion-item {
  background-color: black;
}

.catalog .accordion .accordion-item .accordion-button {
  background-color: black;
  box-shadow: none;
  color: white;
  font-size: 32px;
  border: 1.5px solid #76b900;
}

.catalog .accordion .accordion-item .collapsed {
  border: 1.5px solid #333;
  border-radius: 0px !important;
}

.catalog .accordion .accordion-item .accordion-collapse {
  background-color: black;
  color: #afafaf;
}

.catalog .accordion .accordion-item .accordion-collapse .div-accordion {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
}

.catalog .accordion .accordion-item .accordion-collapse .div-accordion .h3-alphabetic-list {
  color: white;
}

.catalog .accordion .accordion-item .accordion-collapse .div-accordion section {
  padding: 0 20px;
  text-align: center;
}

.catalog .div-accordion-last {
  font-size: 20px;
  display: flex;
  justify-content: flex-start;
}

.catalog .div-accordion-last section {
  padding: 0 20px;
}

.catalog .paragraph-sect-giochi2 {
  font-size: 26px;
  text-align: center;
  padding-top: 100px;
}

.h3-sect-giochi {
  font-family: "Geforce light";
  font-size: 46px;
  color: #ffffff;
  position: absolute;
  left: 100px;
  top: 200px;
  z-index: 2147483647;
}

.span-sect-giochi {
  font-family: "Geforce light";
  font-size: 38px;
  color: #ffffff;
  position: absolute;
  left: 100px;
  top: 260px;
  z-index: 2147483647;
}

#h3-sect-gfn {
  font-family: "Geforce light";
  font-size: 46px;
  color: #ffffff;
  position: absolute;
  top: 200px;
  z-index: 2147483647;
}

#span-sect-gfn {
  font-family: "Geforce light";
  font-size: 38px;
  color: #ffffff;
  position: absolute;
  top: 260px;
  z-index: 2147483647;
}

#h3-sect-genshin {
  font-family: "Geforce light";
  font-size: 46px;
  color: #ffffff;
  position: absolute;
  left: 70px;
  top: 200px;
  z-index: 2147483647;
}

#span-sect-genshin {
  font-family: "Geforce light";
  font-size: 38px;
  color: #ffffff;
  position: absolute;
  left: 70px;
  top: 260px;
  z-index: 2147483647;
}

#h3-sect-guildwars {
  font-family: "Geforce light";
  font-size: 46px;
  color: #ffffff;
  position: absolute;
  left: 70px;
  top: 200px;
  z-index: 2147483647;
  width: 510px;
}

#span-sect-guildwars {
  font-family: "Geforce light";
  font-size: 38px;
  color: #ffffff;
  position: absolute;
  left: 70px;
  top: 320px;
  z-index: 2147483647;
}

#img-guildwars {
  height: 580px;
  object-fit: cover;
  width: 100vw;
}

#img-legobrawls {
  height: 580px;
  object-fit: cover;
  width: 100vw;
}

#img-saintsrow {
  height: 580px;
  object-fit: cover;
  width: 100vw;
}

#img-genshin {
  height: 580px;
  object-fit: cover;
  width: 100vw;
}

#img-guildwars {
  height: 580px;
  object-fit: cover;
  width: 100vw;
}

#sliders-giochi {
  width: 100%;
  height: auto;
  margin-top: 150px;
}

.d-block .w-100 {
  width: 30px;
  height: 30px;
}

.carousel-inner2 {
  width: 900px;
  height: 900px;
}

.carousel-caption {
  position: absolute;
  top: 250px;
  left: 475px;
  width: 500px;
  height: 500px;
}

h5 {
  color: #76B900;
  font-size: 24px;
}

@media screen and (max-width: 560px) {
  .h3-sect-giochi {
    font-family: "Geforce light";
    font-size: 26px;
    color: white;
    position: absolute;
    left: 25px;
    top: 200px;
    z-index: 2147483647;
    width: 250px;
  }
  .span-sect-giochi {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 25px;
    top: 300px;
    z-index: 2147483647;
  }
  #h3-sect-gfn {
    font-family: "Geforce light";
    font-size: 26px;
    color: white;
    position: absolute;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-gfn {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    top: 260px;
    z-index: 2147483647;
  }
  #h3-sect-genshin {
    font-family: "Geforce light";
    font-size: 22px;
    color: white;
    position: absolute;
    left: 10px;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-genshin {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 10px;
    top: 260px;
    z-index: 2147483647;
    width: 250px;
  }
  #h3-sect-guildwars {
    font-family: "Geforce light";
    font-size: 24px;
    color: white;
    position: absolute;
    left: 10px;
    top: 200px;
    z-index: 2147483647;
    width: 300px;
  }
  #span-sect-guildwars {
    font-family: "Geforce light";
    font-size: 18px;
    color: white;
    position: absolute;
    left: 10px;
    top: 280px;
    z-index: 2147483647;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-legobrawls {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-saintsrow {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-genshin {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #sliders-giochi {
    width: 100%;
    height: auto;
    margin-top: 150px;
  }
  .d-block .w-100 {
    width: 30px;
    height: 30px;
  }
  .carousel-inner2 {
    width: 900px;
    height: 900px;
  }
  .carousel-caption {
    position: relative;
    top: 400px;
    left: -100px;
  }
  h5 {
    color: #76B900;
    font-size: 23px;
  }
  .div-accordion {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;
  }
  .div-accordion .h3-alphabetic-list {
    color: white;
  }
  .div-accordion-last {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
@media screen and (max-width: 560px) and (max-width: 760px) {
  .h3-sect-giochi {
    font-family: "Geforce light";
    font-size: 28px;
    color: white;
    position: absolute;
    left: 25px;
    top: 200px;
    z-index: 2147483647;
    width: 350px;
  }
  .span-sect-giochi {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 25px;
    top: 300px;
    z-index: 2147483647;
  }
  #h3-sect-gfn {
    font-family: "Geforce light";
    font-size: 26px;
    color: white;
    position: absolute;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-gfn {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    top: 260px;
    z-index: 2147483647;
  }
  #h3-sect-genshin {
    font-family: "Geforce light";
    font-size: 28px;
    color: white;
    position: absolute;
    left: 40px;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-genshin {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 40px;
    top: 260px;
    z-index: 2147483647;
    width: 250px;
  }
  #h3-sect-guildwars {
    font-family: "Geforce light";
    font-size: 28px;
    color: white;
    position: absolute;
    left: 40px;
    top: 200px;
    z-index: 2147483647;
    width: 340px;
  }
  #span-sect-guildwars {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 40px;
    top: 290px;
    z-index: 2147483647;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-legobrawls {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-saintsrow {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-genshin {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #sliders-giochi {
    width: 100%;
    height: auto;
    margin-top: 150px;
  }
  .d-block .w-100 {
    width: 30px;
    height: 30px;
  }
  .carousel-inner2 {
    width: 900px;
    height: 900px;
  }
  .carousel-caption {
    position: relative;
    top: 450px;
    left: 0px;
  }
  h5 {
    color: #76B900;
    font-size: 23px;
  }
  .div-accordion {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;
  }
  .div-accordion .h3-alphabetic-list {
    color: white;
  }
  .div-accordion-last {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
@media screen and (min-width: 761px) and (max-width: 990px) {
  .h3-sect-giochi {
    font-family: "Geforce light";
    font-size: 28px;
    color: white;
    position: absolute;
    left: 25px;
    top: 200px;
    z-index: 2147483647;
    width: 350px;
  }
  .span-sect-giochi {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 25px;
    top: 300px;
    z-index: 2147483647;
  }
  #h3-sect-gfn {
    font-family: "Geforce light";
    font-size: 26px;
    color: white;
    position: absolute;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-gfn {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    top: 260px;
    z-index: 2147483647;
  }
  #h3-sect-genshin {
    font-family: "Geforce light";
    font-size: 28px;
    color: white;
    position: absolute;
    left: 40px;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-genshin {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 40px;
    top: 260px;
    z-index: 2147483647;
    width: 250px;
  }
  #h3-sect-guildwars {
    font-family: "Geforce light";
    font-size: 28px;
    color: white;
    position: absolute;
    left: 40px;
    top: 200px;
    z-index: 2147483647;
    width: 340px;
  }
  #span-sect-guildwars {
    font-family: "Geforce light";
    font-size: 20px;
    color: white;
    position: absolute;
    left: 40px;
    top: 290px;
    z-index: 2147483647;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-legobrawls {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-saintsrow {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-genshin {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #sliders-giochi {
    width: 100%;
    height: auto;
    margin-top: 150px;
  }
  .d-block .w-100 {
    width: 30px;
    height: 30px;
  }
  .carousel-inner2 {
    width: 900px;
    height: 900px;
  }
  .carousel-caption {
    position: relative;
    top: 450px;
    left: 0px;
  }
  h5 {
    color: #76B900;
    font-size: 23px;
  }
  .h1-size {
    font-size: 18px;
    font-family: "Geforce bold";
  }
  .h2-size {
    font-size: 36px;
    font-family: "Geforce bold";
  }
  .div-accordion {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 20px;
  }
  .div-accordion .h3-alphabetic-list {
    color: white;
  }
  .div-accordion-last {
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
}
@media screen and (min-width: 991px) and (max-width: 1440px) {
  .h3-sect-giochi {
    font-family: "Geforce light";
    font-size: 34px;
    color: white;
    position: absolute;
    left: 50px;
    top: 200px;
    z-index: 2147483647;
    width: 300px;
  }
  .span-sect-giochi {
    font-family: "Geforce light";
    font-size: 26px;
    color: white;
    position: absolute;
    left: 50px;
    top: 300px;
    z-index: 2147483647;
  }
  #h3-sect-gfn {
    font-family: "Geforce light";
    font-size: 34px;
    color: white;
    position: absolute;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-gfn {
    font-family: "Geforce light";
    font-size: 28px;
    color: white;
    position: absolute;
    top: 260px;
    z-index: 2147483647;
  }
  #h3-sect-genshin {
    font-family: "Geforce light";
    font-size: 34px;
    color: white;
    position: absolute;
    left: 60px;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-genshin {
    font-family: "Geforce light";
    font-size: 26px;
    color: white;
    position: absolute;
    left: 60px;
    top: 260px;
    z-index: 2147483647;
    width: 300px;
  }
  #h3-sect-guildwars {
    font-family: "Geforce light";
    font-size: 34px;
    color: white;
    position: absolute;
    left: 60px;
    top: 200px;
    z-index: 2147483647;
    width: 420px;
    margin-bottom: 300px;
  }
  #span-sect-guildwars {
    font-family: "Geforce light";
    font-size: 26px;
    color: white;
    position: absolute;
    left: 60px;
    top: 300px;
    z-index: 2147483647;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-legobrawls {
    height: 650px;
    object-fit: cover;
    width: 100vw;
  }
  #img-saintsrow {
    height: 650px;
    object-fit: cover;
    width: 100vw;
  }
  #img-genshin {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #sliders-giochi {
    width: 100%;
    height: auto;
    margin-top: 150px;
  }
  .d-block .w-100 {
    width: 30px;
    height: 30px;
  }
  .carousel-inner2 {
    width: 900px;
    height: 900px;
  }
  .carousel-caption {
    position: absolute;
    top: 450px;
    right: 50px;
    width: 500px;
    height: 500px;
  }
  h5 {
    color: #76B900;
    font-size: 23px;
  }
}
@media screen and (min-width: 1440px) {
  .h3-sect-giochi {
    font-family: "Geforce light";
    font-size: 40px;
    color: white;
    position: absolute;
    left: 100px;
    top: 200px;
    z-index: 2147483647;
  }
  .span-sect-giochi {
    font-family: "Geforce light";
    font-size: 32px;
    color: white;
    position: absolute;
    left: 100px;
    top: 260px;
    z-index: 2147483647;
  }
  #h3-sect-gfn {
    font-family: "Geforce light";
    font-size: 40px;
    color: white;
    position: absolute;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-gfn {
    font-family: "Geforce light";
    font-size: 32px;
    color: white;
    position: absolute;
    top: 260px;
    z-index: 2147483647;
  }
  #h3-sect-genshin {
    font-family: "Geforce light";
    font-size: 40px;
    color: white;
    position: absolute;
    left: 70px;
    top: 200px;
    z-index: 2147483647;
  }
  #span-sect-genshin {
    font-family: "Geforce light";
    font-size: 32px;
    color: white;
    position: absolute;
    left: 70px;
    top: 260px;
    z-index: 2147483647;
  }
  #h3-sect-guildwars {
    font-family: "Geforce light";
    font-size: 40px;
    color: white;
    position: absolute;
    left: 70px;
    top: 200px;
    z-index: 2147483647;
    width: 510px;
  }
  #span-sect-guildwars {
    font-family: "Geforce light";
    font-size: 32px;
    color: white;
    position: absolute;
    left: 70px;
    top: 320px;
    z-index: 2147483647;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-legobrawls {
    height: 750px;
    object-fit: cover;
    width: 100vw;
  }
  #img-saintsrow {
    height: 820px;
    object-fit: cover;
    width: 100vw;
  }
  #img-genshin {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #img-guildwars {
    height: 580px;
    object-fit: cover;
    width: 100vw;
  }
  #sliders-giochi {
    width: 100%;
    height: auto;
    margin-top: 150px;
  }
  .d-block .w-100 {
    width: 30px;
    height: 30px;
  }
  .carousel-inner2 {
    width: 900px;
    height: 900px;
  }
  .carousel-caption {
    position: absolute;
    top: 250px;
    left: 475px;
    width: 500px;
    height: 500px;
  }
  h5 {
    color: #76B900;
    font-size: 23px;
  }
}
.container-list {
  color: white;
  width: 100%;
  height: auto;
  text-align: center;
}
.container-list .lista-nuovi-giochi {
  display: flex;
  flex-direction: column;
  line-height: 50px;
  margin-top: 50px;
}
.container-list .lista-nuovi-giochi ::marker {
  color: black;
}
.container-list .lista-nuovi-giochi .li-lista-giochi {
  font-size: 22px;
  text-decoration: none;
}
.container-list .lista-nuovi-giochi .li-lista-giochi .link-giochi {
  color: #76B900 !important;
  font-family: "Geforce bold";
}

img {
  width: 100%;
  height: auto;
  vertical-align: middle;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  pointer-events: none;
}

.comparison-slider {
  margin: 50px auto;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.25);
}

.comparison-item {
  overflow: hidden;
}

.comparison-item.top {
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
}

.comparison-item.top img {
  height: 100%;
  object-fit: cover;
}

.handle {
  position: absolute;
  width: 3px;
  height: 100%;
  background: #76B900;
  z-index: 3;
  cursor: col-resize;
  top: 0;
}

.handle svg {
  display: block;
  position: absolute;
  top: calc(50% - 20px);
  right: calc(50% - 20px);
  height: 40px;
  width: 40px;
  background: #76B900;
  border-radius: 50%;
  padding: 2px;
}

.text-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 90px;
  height: 250px;
  background: linear-gradient(rgba(0, 0, 0, 0.915) 40%, rgba(0, 0, 0, 0.586) 60%, rgba(0, 0, 0, 0.449) 90%, rgba(0, 0, 0, 0) 100%);
  z-index: 100;
  text-align: center;
}

.text-content {
  display: flex;
  justify-content: space-between;
  padding: 0 70px 0 70px;
  font-size: 22px;
}
.text-content #span-grey {
  color: grey;
}
.text-content #span-green {
  color: #76B900;
}

.text-split {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 60px 0;
  margin: auto;
}
.text-split .text-h2 {
  font-size: 28px;
  margin-bottom: 30px;
}

@media all and (max-width: 1200px) {
  .text-split {
    margin-top: 70px;
  }
}
@media all and (max-width: 540px) {
  .text-header {
    background: linear-gradient(rgba(0, 0, 0, 0.733) 40%, rgba(0, 0, 0, 0.308) 60%, rgba(0, 0, 0, 0.185) 90%, rgba(0, 0, 0, 0) 100%);
  }
  .text-header h2 {
    margin-bottom: 130px;
  }
  .text-header p {
    display: none;
  }
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: black !important;
  font-family: "Geforce light";
  list-style-type: none;
  text-decoration: none;
}

a {
  text-decoration: none !important;
  color: white !important;
}

/*# sourceMappingURL=index.cs.map */
