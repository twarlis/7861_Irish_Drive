// Created by iWeb 2.0 local-build-20161005

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="448" height="268" style="height: 252px; left: 74px; position: absolute; top: 370px; width: 448px; z-index: 1; "><param name="src" value="Media/7861%20Irish%20Drive.mp4" /><param name="controller" value="false" /><param name="autoplay" value="true" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="true" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="448" height="268" style="height: 252px; left: 74px; position: absolute; top: 370px; width: 448px; z-index: 1; "><param name="src" value="7861_Irish_Drive_-_Web_Tour_files/7861%20Irish%20Drive.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/7861%20Irish%20Drive.mp4"/><param name="controller" value="false"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="448" height="268" data="Media/7861%20Irish%20Drive.mp4" style="height: 252px; left: 74px; position: absolute; top: 370px; width: 448px; z-index: 1; "><param name="src" value="Media/7861%20Irish%20Drive.mp4"/><param name="controller" value="false"/><param name="autoplay" value="true"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="true"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('7861_Irish_Drive_-_Web_Tour_files/7861_Irish_Drive_-_Web_TourMoz.css')
fixAllIEPNGs('Media/transparent.gif');performPostEffectsFixups()}
