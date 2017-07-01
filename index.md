<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<script src="svg-pan-zoom.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
</head>
            
<body>
<style>
#sidebar {float: none;width: 60pxhover: blue;}
</style>
<div id="sidebar">
    
    
<svg id="swatches" width="900" height="260" style="stroke: #000;stroke-width: 2; stroke-opacity: 0">

  <rect style="fill:#000000" width="23" height="23" />
  <rect style="fill:#F47F17" y="25" width="23" height="23" />
  <rect style="fill:#FF6E00" y="50" width="23" height="23" />
  <rect style="fill:#E65100" y="75" width="23" height="23" />
  <rect style="fill:#BF360C" y="100" width="23" height="23" />
  <rect style="fill:#B71C1C" y="125" width="23" height="23" />
  <rect style="fill:#880E4F" y="150" width="23" height="23" />
  <rect style="fill:#4A148C" y="175" width="23" height="23" />
  <rect style="fill:#311B92" y="200" width="23" height="23" />
  <rect style="fill:#424242" x="25" width="23" height="23" />
  <rect style="fill:#F9A825" x="25" y="25" width="23" height="23" />
  <rect style="fill:#FF8F00" x="25" y="50" width="23" height="23" />
  <rect style="fill:#EF6C00" x="25" y="75" width="23" height="23" />
  <rect style="fill:#D84315" x="25" y="100" width="23" height="23" />
  <rect style="fill:#C62828" x="25" y="125" width="23" height="23" />
  <rect style="fill:#AD1457" x="25" y="150" width="23" height="23" />
  <rect style="fill:#6A1B9A" x="25" y="175" width="23" height="23" />
  <rect style="fill:#4527A0" x="25" y="200" width="23" height="23" />
  <rect style="fill:#616161" x="50" width="23" height="23" />
  <rect style="fill:#FBC02D" x="50" y="25" width="23" height="23" />
  <rect style="fill:#FFA000" x="50" y="50" width="23" height="23" />
  <rect style="fill:#F57C00" x="50" y="75" width="23" height="23" />
  <rect style="fill:#E64A18" x="50" y="100" width="23" height="23" />
  <rect style="fill:#D32F2F" x="50" y="125" width="23" height="23" />
  <rect style="fill:#C2185B" x="50" y="150" width="23" height="23" />
  <rect style="fill:#7B1EA2" x="50" y="175" width="23" height="23" />
  <rect style="fill:#512CA8" x="50" y="200" width="23" height="23" />
  <rect style="fill:#757575" x="75" width="23" height="23" />
  <rect style="fill:#FDD735" x="75" y="25" width="23" height="23" />
  <rect style="fill:#FFB300" x="75" y="50" width="23" height="23" />
  <rect style="fill:#FB8C00" x="75" y="75" width="23" height="23" />
  <rect style="fill:#F4511E" x="75" y="100" width="23" height="23" />
  <rect style="fill:#E53935" x="75" y="125" width="23" height="23" />
  <rect style="fill:#D81B60" x="75" y="150" width="23" height="23" />
  <rect style="fill:#8E24AA" x="75" y="175" width="23" height="23" />
  <rect style="fill:#5E35B1" x="75" y="200" width="23" height="23" />
  <rect style="fill:#9E9E9E" x="100" width="23" height="23" />
  <rect style="fill:#FEEB3B" x="100" y="25" width="23" height="23" />
  <rect style="fill:#FFC107" x="100" y="50" width="23" height="23" />
  <rect style="fill:#FF9800" x="100" y="75" width="23" height="23" />
  <rect style="fill:#FF5722" x="100" y="100" width="23" height="23" />
  <rect style="fill:#F44336" x="100" y="125" width="23" height="23" />
  <rect style="fill:#E91D62" x="100" y="150" width="23" height="23" />
  <rect style="fill:#9C27B0" x="100" y="175" width="23" height="23" />
  <rect style="fill:#673AB7" x="100" y="200" width="23" height="23" />
  <rect style="fill:#BDBDBD" x="125" width="23" height="23" />
  <rect style="fill:#FFEE58" x="125" y="25" width="23" height="23" />
  <rect style="fill:#FFCA28" x="125" y="50" width="23" height="23" />
  <rect style="fill:#FFA726" x="125" y="75" width="23" height="23" />
  <rect style="fill:#FF6F43" x="125" y="100" width="23" height="23" />
  <rect style="fill:#EF5350" x="125" y="125" width="23" height="23" />
  <rect style="fill:#EC407A" x="125" y="150" width="23" height="23" />
  <rect style="fill:#AB47BC" x="125" y="175" width="23" height="23" />
  <rect style="fill:#7D57C2" x="125" y="200" width="23" height="23" />
  <rect style="fill:#E0E0E0" x="150" width="23" height="23" />
  <rect style="fill:#FFEA00" x="150" y="25" width="23" height="23" />
  <rect style="fill:#FFC300" x="150" y="50" width="23" height="23" />
  <rect style="fill:#FF9100" x="150" y="75" width="23" height="23" />
  <rect style="fill:#FF3D00" x="150" y="100" width="23" height="23" />
  <rect style="fill:#FE1744" x="150" y="125" width="23" height="23" />
  <rect style="fill:#F50057" x="150" y="150" width="23" height="23" />
  <rect style="fill:#D500F9" x="150" y="175" width="23" height="23" />
  <rect style="fill:#651FFF" x="150" y="200" width="23" height="23" />
  <rect style="fill:#EEEEEE" x="175" width="23" height="23" />
  <rect fill="yellow" x="175" y="25" width="23" height="23" />
  <rect style="fill:#FFD740" x="175" y="50" width="23" height="23" />
  <rect style="fill:#FFAB40" x="175" y="75" width="23" height="23" />
  <rect style="fill:#FF6E40" x="175" y="100" width="23" height="23" />
  <rect style="fill:#FF5252" x="175" y="125" width="23" height="23" />
  <rect style="fill:#FE4081" x="175" y="150" width="23" height="23" />
  <rect style="fill:#E040FB" x="175" y="175" width="23" height="23" />
  <rect style="fill:#7C4DFF" x="175" y="200" width="23" height="23" />
  <rect style="fill:#F4F4F4" x="200" width="23" height="23" />
  <rect style="fill:#FFFF8D" x="200" y="25" width="23" height="23" />
  <rect style="fill:#FFE57F" x="200" y="50" width="23" height="23" />
  <rect style="fill:#FFD080" x="200" y="75" width="23" height="23" />
  <rect style="fill:#FF9E80" x="200" y="100" width="23" height="23" />
  <rect style="fill:#FF8A80" x="200" y="125" width="23" height="23" />
  <rect style="fill:#FF80AB" x="200" y="150" width="23" height="23" />
  <rect style="fill:#EA80FB" x="200" y="175" width="23" height="23" />
  <rect style="fill:#B388FE" x="200" y="200" width="23" height="23" />
  <rect style="fill:#FAFAFA" x="225" width="23" height="23" />
  <rect style="fill:#FFF076" x="225" y="25" width="23" height="23" />
  <rect style="fill:#FED54F" x="225" y="50" width="23" height="23" />
  <rect style="fill:#FFB74D" x="225" y="75" width="23" height="23" />
  <rect style="fill:#FF8A64" x="225" y="100" width="23" height="23" />
  <rect style="fill:#E57373" x="225" y="125" width="23" height="23" />
  <rect style="fill:#F06192" x="225" y="150" width="23" height="23" />
  <rect style="fill:#BA68C8" x="225" y="175" width="23" height="23" />
  <rect style="fill:#9575CD" x="225" y="200" width="23" height="23" />
  <rect style="fill:#455A64" x="250" width="23" height="23" />
  <rect style="fill:#FFF59D" x="250" y="25" width="23" height="23" />
  <rect style="fill:#FFE082" x="250" y="50" width="23" height="23" />
  <rect style="fill:#FFCC80" x="250" y="75" width="23" height="23" />
  <rect style="fill:#FFAB91" x="250" y="100" width="23" height="23" />
  <rect style="fill:#EF9A9A" x="250" y="125" width="23" height="23" />
  <rect style="fill:#F48FB1" x="250" y="150" width="23" height="23" />
  <rect style="fill:#CE93D8" x="250" y="175" width="23" height="23" />
  <rect style="fill:#B39DDB" x="250" y="200" width="23" height="23" />
  <rect style="fill:#546E7A" x="275" width="23" height="23" />
  <rect style="fill:#FFF9C4" x="275" y="25" width="23" height="23" />
  <rect style="fill:#FFECB3" x="275" y="50" width="23" height="23" />
  <rect style="fill:#FFE0B2" x="275" y="75" width="23" height="23" />
  <rect style="fill:#FECCBC" x="275" y="100" width="23" height="23" />
  <rect style="fill:#FECDD2" x="275" y="125" width="23" height="23" />
  <rect style="fill:#F8BAD0" x="275" y="150" width="23" height="23" />
  <rect style="fill:#E1BEE7" x="275" y="175" width="23" height="23" />
  <rect style="fill:#D1C4E9" x="275" y="200" width="23" height="23" />
  <rect style="fill:#607D8B" x="300" width="23" height="23" />
  <rect style="fill:#FFFDE7" x="300" y="25" width="23" height="23" />
  <rect style="fill:#FEF8E1" x="300" y="50" width="23" height="23" />
  <rect style="fill:#FFF3E0" x="300" y="75" width="23" height="23" />
  <rect style="fill:#FBE9E7" x="300" y="100" width="23" height="23" />
  <rect style="fill:#FFEBEE" x="300" y="125" width="23" height="23" />
  <rect style="fill:#FCE3EC" x="300" y="150" width="23" height="23" />
  <rect style="fill:#F3E5F5" x="300" y="175" width="23" height="23" />
  <rect style="fill:#EDE6F6" x="300" y="200" width="23" height="23" />
  <rect style="fill:#78909C" x="325" width="23" height="23" />
  <rect style="fill:#827717" x="325" y="25" width="23" height="23" />
  <rect style="fill:#33691D" x="325" y="50" width="23" height="23" />
  <rect style="fill:#1B5E20" x="325" y="75" width="23" height="23" />
  <rect style="fill:#004D40" x="325" y="100" width="23" height="23" />
  <rect style="fill:#006064" x="325" y="125" width="23" height="23" />
  <rect style="fill:#01579B" x="325" y="150" width="23" height="23" />
  <rect style="fill:#0D47A1" x="325" y="175" width="23" height="23" />
  <rect style="fill:#1A237E" x="325" y="200" width="23" height="23" />
  <rect style="fill:#90A4AE" x="350" width="23" height="23" />
  <rect style="fill:#9E9D24" x="350" y="25" width="23" height="23" />
  <rect style="fill:#558B2F" x="350" y="50" width="23" height="23" />
  <rect style="fill:#2E7C32" x="350" y="75" width="23" height="23" />
  <rect style="fill:#00695C" x="350" y="100" width="23" height="23" />
  <rect style="fill:#00838F" x="350" y="125" width="23" height="23" />
  <rect style="fill:#0277BD" x="350" y="150" width="23" height="23" />
  <rect style="fill:#1565C0" x="350" y="175" width="23" height="23" />
  <rect style="fill:#283593" x="350" y="200" width="23" height="23" />
  <rect style="fill:#B0BEC5" x="375" width="23" height="23" />
  <rect style="fill:#AFB42B" x="375" y="25" width="23" height="23" />
  <rect style="fill:#689F37" x="375" y="50" width="23" height="23" />
  <rect style="fill:#378E3C" x="375" y="75" width="23" height="23" />
  <rect style="fill:#00796B" x="375" y="100" width="23" height="23" />
  <rect style="fill:#0097A7" x="375" y="125" width="23" height="23" />
  <rect style="fill:#0288D1" x="375" y="150" width="23" height="23" />
  <rect style="fill:#1976D2" x="375" y="175" width="23" height="23" />
  <rect style="fill:#303F9F" x="375" y="200" width="23" height="23" />
  <rect style="fill:#CFD8DC" x="400" width="23" height="23" />
  <rect style="fill:#C0CA33" x="400" y="25" width="23" height="23" />
  <rect style="fill:#7CB342" x="400" y="50" width="23" height="23" />
  <rect style="fill:#43A047" x="400" y="75" width="23" height="23" />
  <rect style="fill:#00897B" x="400" y="100" width="23" height="23" />
  <rect style="fill:#00ACC1" x="400" y="125" width="23" height="23" />
  <rect style="fill:#029BE5" x="400" y="150" width="23" height="23" />
  <rect style="fill:#1E88E5" x="400" y="175" width="23" height="23" />
  <rect style="fill:#3949AB" x="400" y="200" width="23" height="23" />
  <rect style="fill:#EBEFF1" x="425" width="23" height="23" />
  <rect style="fill:#CCDC39" x="425" y="25" width="23" height="23" />
  <rect style="fill:#8BC24A" x="425" y="50" width="23" height="23" />
  <rect style="fill:#4CAF50" x="425" y="75" width="23" height="23" />
  <rect style="fill:#009688" x="425" y="100" width="23" height="23" />
  <rect style="fill:#00BCD4" x="425" y="125" width="23" height="23" />
  <rect style="fill:#03A9F4" x="425" y="150" width="23" height="23" />
  <rect style="fill:#2196F3" x="425" y="175" width="23" height="23" />
  <rect style="fill:#3E51B5" x="425" y="200" width="23" height="23" />
  <rect style="fill:#4E332E" x="450" width="23" height="23" />
  <rect style="fill:#CCDC39" x="450" y="25" width="23" height="23" />
  <rect style="fill:#8BC24A" x="450" y="50" width="23" height="23" />
  <rect style="fill:#4CAF50" x="450" y="75" width="23" height="23" />
  <rect style="fill:#009688" x="450" y="100" width="23" height="23" />
  <rect style="fill:#00BCD4" x="450" y="125" width="23" height="23" />
  <rect style="fill:#03A9F4" x="450" y="150" width="23" height="23" />
  <rect style="fill:#2196F3" x="450" y="175" width="23" height="23" />
  <rect style="fill:#3E51B5" x="450" y="200" width="23" height="23" />
  <rect style="fill:#5D4037" x="475" width="23" height="23" />
  <rect style="fill:#AEEA00" x="475" y="25" width="23" height="23" />
  <rect style="fill:#64DD17" x="475" y="50" width="23" height="23" />
  <rect style="fill:#00C853" x="475" y="75" width="23" height="23" />
  <rect style="fill:#00BFA5" x="475" y="100" width="23" height="23" />
  <rect style="fill:#00B8D4" x="475" y="125" width="23" height="23" />
  <rect style="fill:#0091EA" x="475" y="150" width="23" height="23" />
  <rect style="fill:#2962FF" x="475" y="175" width="23" height="23" />
  <rect style="fill:#304FFE" x="475" y="200" width="23" height="23" />
  <rect style="fill:#6D4C41" x="500" width="23" height="23" />
  <rect style="fill:#C6FE00" x="500" y="25" width="23" height="23" />
  <rect style="fill:#76FF03" x="500" y="50" width="23" height="23" />
  <rect style="fill:#00E676" x="500" y="75" width="23" height="23" />
  <rect style="fill:#1DE9B6" x="500" y="100" width="23" height="23" />
  <rect style="fill:#00E5FF" x="500" y="125" width="23" height="23" />
  <rect style="fill:#00B0FF" x="500" y="150" width="23" height="23" />
  <rect style="fill:#2979FF" x="500" y="175" width="23" height="23" />
  <rect style="fill:#3D5AFE" x="500" y="200" width="23" height="23" />
  <rect style="fill:#795548" x="525" width="23" height="23" />
  <rect style="fill:#EEFF41" x="525" y="25" width="23" height="23" />
  <rect style="fill:#B2FF59" x="525" y="50" width="23" height="23" />
  <rect style="fill:#69F0AE" x="525" y="75" width="23" height="23" />
  <rect style="fill:#64FFDA" x="525" y="100" width="23" height="23" />
  <rect style="fill:#18FFFF" x="525" y="125" width="23" height="23" />
  <rect style="fill:#40C4FF" x="525" y="150" width="23" height="23" />
  <rect style="fill:#448AFF" x="525" y="175" width="23" height="23" />
  <rect style="fill:#536DFD" x="525" y="200" width="23" height="23" />
  <rect style="fill:#8D6E62" x="550" width="23" height="23" />
  <rect style="fill:#D4E157" x="550" y="25" width="23" height="23" />
  <rect style="fill:#9CCC65" x="550" y="50" width="23" height="23" />
  <rect style="fill:#66BB6A" x="550" y="75" width="23" height="23" />
  <rect style="fill:#26A69A" x="550" y="100" width="23" height="23" />
  <rect style="fill:#26C6DA" x="550" y="125" width="23" height="23" />
  <rect style="fill:#29B6F6" x="550" y="150" width="23" height="23" />
  <rect style="fill:#42A5F5" x="550" y="175" width="23" height="23" />
  <rect style="fill:#5C6BC0" x="550" y="200" width="23" height="23" />
  <rect style="fill:#A1887E" x="575" width="23" height="23" />
  <rect style="fill:#DBE675" x="575" y="25" width="23" height="23" />
  <rect style="fill:#AED581" x="575" y="50" width="23" height="23" />
  <rect style="fill:#81C784" x="575" y="75" width="23" height="23" />
  <rect style="fill:#4DB5AC" x="575" y="100" width="23" height="23" />
  <rect style="fill:#4DD0E1" x="575" y="125" width="23" height="23" />
  <rect style="fill:#4FC3F7" x="575" y="150" width="23" height="23" />
  <rect style="fill:#63B4F6" x="575" y="175" width="23" height="23" />
  <rect style="fill:#7986CB" x="575" y="200" width="23" height="23" />
  <rect style="fill:#BCAAA4" x="600" width="23" height="23" />
  <rect style="fill:#E6EE9C" x="600" y="25" width="23" height="23" />
  <rect style="fill:#C5E1A5" x="600" y="50" width="23" height="23" />
  <rect style="fill:#A5D6A7" x="600" y="75" width="23" height="23" />
  <rect style="fill:#80CAC4" x="600" y="100" width="23" height="23" />
  <rect style="fill:#80DEE9" x="600" y="125" width="23" height="23" />
  <rect style="fill:#81D4FA" x="600" y="150" width="23" height="23" />
  <rect style="fill:#90C9F9" x="600" y="175" width="23" height="23" />
  <rect style="fill:#9FA8DA" x="600" y="200" width="23" height="23" />
  <rect style="fill:#D7CCC8" x="625" width="23" height="23" />
  <rect style="fill:#F4FE81" x="625" y="25" width="23" height="23" />
  <rect style="fill:#CCFF90" x="625" y="50" width="23" height="23" />
  <rect style="fill:#B8F6CA" x="625" y="75" width="23" height="23" />
  <rect style="fill:#A7FFEA" x="625" y="100" width="23" height="23" />
  <rect style="fill:#84FFFF" x="625" y="125" width="23" height="23" />
  <rect style="fill:#80D7FF" x="625" y="150" width="23" height="23" />
  <rect style="fill:#82B1FF" x="625" y="175" width="23" height="23" />
  <rect style="fill:#8C9EFF" x="625" y="200" width="23" height="23" />
  <rect style="fill:#EFEBE9" x="650" width="23" height="23" />
  <rect style="fill:#EFF4C3" x="650" y="25" width="23" height="23" />
  <rect style="fill:#DCEDC8" x="650" y="50" width="23" height="23" />
  <rect style="fill:#C7E6C9" x="650" y="75" width="23" height="23" />
  <rect style="fill:#B2DFDB" x="650" y="100" width="23" height="23" />
  <rect style="fill:#B2EAF2" x="650" y="125" width="23" height="23" />
  <rect style="fill:#B3E5FC" x="650" y="150" width="23" height="23" />
  <rect style="fill:#BBDEFB" x="650" y="175" width="23" height="23" />
  <rect style="fill:#C5C9E8" x="650" y="200" width="23" height="23" />
  <rect style="fill:#FAF7F5" x="675" width="23" height="23" />
  <rect style="fill:#F9FBE7" x="675" y="25" width="23" height="23" />
  <rect style="fill:#F1F8E9" x="675" y="50" width="23" height="23" />
  <rect style="fill:#E8F4E9" x="675" y="75" width="23" height="23" />
  <rect style="fill:#DFF2F1" x="675" y="100" width="23" height="23" />
  <rect style="fill:#E0F7FA" x="675" y="125" width="23" height="23" />
  <rect style="fill:#E1F4FE" x="675" y="150" width="23" height="23" />
  <rect style="fill:#E2F2FD" x="675" y="175" width="23" height="23" />
  <rect style="fill:#E8EAF6" x="675" y="200" width="23" height="23" />
  <rect id="selection" style="stroke:#0000ff; stroke-opacity: 1;fill:none" x="0" y="0" width="23" height="23" />
    
  <rect fill="#000000" type="button" stroke="#000000"  stroke-width="0.68" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#000000';"/>
  <rect fill="#4d3d25" type="button" stroke="#000000" stroke-width="0.68" x="28" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#4d3d25';"/>
  <rect fill="#BBB8BD" type="button" stroke="#000000" stroke-width="0.68" x="56" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#BBB8BD';"/>
  <rect fill="#747A84" type="button" stroke="#000000" stroke-width="0.68" x="84" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#747A84';"/>
  <rect fill="#FFF212" type="button" stroke="#000000" stroke-width="0.68" x="112" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#FFF212';"/>
  <rect fill="#3A41C7" type="button" stroke="#000000" stroke-width="0.68" x="140" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#3A41C7';"/>
  <rect fill="#3F2E5E" type="button" stroke="#000000" stroke-width="0.68" x="168" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#3F2E5E';"/>
  <rect fill="#A90098" type="button" stroke="#000000" stroke-width="0.68" x="195" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#A90098';"/>
  <rect fill="#469ef5" type="button" stroke="#000000" stroke-width="0.68" x="223" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#469ef5';"/>
  <rect fill="#008EEC" type="button" stroke="#000000" stroke-width="0.68" x="251" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#008EEC';"/>
  <rect fill="#9ED5CE" type="button" stroke="#000000" stroke-width="0.68" x="279" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#9ED5CE';"/>
  <rect fill="#FEFEFE" type="button" stroke="#000000" stroke-width="0.68" x="307" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#FEFEFE';"/>
  <rect fill="#2A4C67" type="button" stroke="#000000" stroke-width="0.68" x="335" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#2A4C67';"/>
  <rect fill="#585A43" type="button" stroke="#000000" stroke-width="0.68" x="363" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#585A43';"/>
  <rect fill="#A2D06B" type="button" stroke="#000000" stroke-width="0.68" x="391" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#A2D06B';"/>
  <rect fill="#013C09" type="button" stroke="#000000" stroke-width="0.68" x="419" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#013C09';"/>
  <rect fill="#a0f032" type="button" stroke="#000000" stroke-width="0.68" x="447" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#a0f032';"/>
  <rect fill="#F1E018" type="button" stroke="#000000" stroke-width="0.68" x="475" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#F1E018';"/>
  <rect fill="#E4CF98" type="button" stroke="#000000" stroke-width="0.68" x="503" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#E4CF98';"/>
  <rect fill="#FD8200" type="button" stroke="#000000" stroke-width="0.68" x="530" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#FD8200';"/>
  <rect fill="#B94C00" type="button" stroke="#000000" stroke-width="0.68" x="558" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#B94C00';"/>
  <rect fill="#9A0116" type="button" stroke="#000000" stroke-width="0.68" x="586" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#9A0116';"/>
  <rect fill="#6F1721" type="button" stroke="#000000" stroke-width="0.68" x="614" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#6F1721';"/>
  <rect fill="#5F2124" type="button" stroke="#000000" stroke-width="0.68" x="642" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#5F2124';"/>
  <rect fill="#040e2e" type="button" stroke="#000000" stroke-width="0.68" x="670" y="227" width="27.9215" height="26.08" onclick="document.body.style.backgroundColor = '#040e2e';"/>
 </svg></div>

<div id="area" style="width: 695px; height: 190px; border:1px solid black; ">
<svg id=pattern xmlns="http://www.w3.org/2000/svg" width="180mm" height="50mm" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 18000 5000">
<g id="Layer_x0020_1">
    <g id="_451943384">
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M3397 4787c1986-109 3089-1157 4103-2275C8688 1206 9738 326 11580 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M3397 4787c1986-109 3089-1157 4103-2275C8688 1206 9738 326 11580 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M11580 4787c-1986-109-3089-1157-4103-2275C6289 1206 5239 326 3397 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M11580 4787c-1986-109-3089-1157-4103-2275C6289 1206 5239 326 3397 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M14603 4787c-1986-109-3089-1157-4103-2275C9312 1206 8262 326 6420 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M14603 4787c-1986-109-3089-1157-4103-2275C9312 1206 8262 326 6420 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M6420 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M6420 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M3297 4787c1986-109 3089-1157 4103-2275C8588 1206 9638 326 11480 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M3297 4787c1986-109 3089-1157 4103-2275C8588 1206 9638 326 11480 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M11480 4787c-1986-109-3089-1157-4103-2275C6189 1206 5139 326 3297 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M11480 4787c-1986-109-3089-1157-4103-2275C6189 1206 5139 326 3297 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M14703 4787c-1986-109-3089-1157-4103-2275C9412 1206 8362 326 6520 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M14703 4787c-1986-109-3089-1157-4103-2275C9412 1206 8362 326 6520 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M6520 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M6520 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M3197 4787c1986-109 3089-1157 4103-2275C8488 1206 9538 326 11380 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M3197 4787c1986-109 3089-1157 4103-2275C8488 1206 9538 326 11380 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M11380 4787c-1986-109-3089-1157-4103-2275C6089 1206 5039 326 3197 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M11380 4787c-1986-109-3089-1157-4103-2275C6089 1206 5039 326 3197 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M14803 4787c-1986-109-3089-1157-4103-2275C9512 1206 8462 326 6620 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M14803 4787c-1986-109-3089-1157-4103-2275C9512 1206 8462 326 6620 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M6620 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M6620 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M3097 4787c1986-109 3089-1157 4103-2275C8388 1206 9438 326 11280 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M3097 4787c1986-109 3089-1157 4103-2275C8388 1206 9438 326 11280 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M11280 4787c-1986-109-3089-1157-4103-2275C5989 1206 4939 326 3097 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M11280 4787c-1986-109-3089-1157-4103-2275C5989 1206 4939 326 3097 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M14903 4787c-1986-109-3089-1157-4103-2275C9612 1206 8562 326 6720 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M14903 4787c-1986-109-3089-1157-4103-2275C9612 1206 8562 326 6720 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M6720 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M6720 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M2997 4787c1986-109 3089-1157 4103-2275C8288 1206 9338 326 11180 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M2997 4787c1986-109 3089-1157 4103-2275C8288 1206 9338 326 11180 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M11180 4787c-1986-109-3089-1157-4103-2275C5889 1206 4839 326 2997 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M11180 4787c-1986-109-3089-1157-4103-2275C5889 1206 4839 326 2997 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M15003 4787c-1986-109-3089-1157-4103-2275C9712 1206 8662 326 6820 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M15003 4787c-1986-109-3089-1157-4103-2275C9712 1206 8662 326 6820 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M6820 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M6820 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M2897 4787c1986-109 3089-1157 4103-2275C8188 1206 9238 326 11080 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M2897 4787c1986-109 3089-1157 4103-2275C8188 1206 9238 326 11080 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M11080 4787c-1986-109-3089-1157-4103-2275C5789 1206 4739 326 2897 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M11080 4787c-1986-109-3089-1157-4103-2275C5789 1206 4739 326 2897 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M15103 4787c-1986-109-3089-1157-4103-2275C9812 1206 8762 326 6920 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M15103 4787c-1986-109-3089-1157-4103-2275C9812 1206 8762 326 6920 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M6920 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M6920 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M2797 4787c1986-109 3089-1157 4103-2275C8088 1206 9138 326 10980 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M2797 4787c1986-109 3089-1157 4103-2275C8088 1206 9138 326 10980 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M10980 4787c-1986-109-3089-1157-4103-2275C5689 1206 4639 326 2797 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M10980 4787c-1986-109-3089-1157-4103-2275C5689 1206 4639 326 2797 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M15203 4787c-1986-109-3089-1157-4103-2275C9912 1206 8862 326 7020 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M15203 4787c-1986-109-3089-1157-4103-2275C9912 1206 8862 326 7020 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M7020 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M7020 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M2726 4779c1979-108 3078-1153 4089-2267C7999 1211 9046 333 10881 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path id="1" d="M2726 4779c1979-108 3078-1153 4089-2267C7999 1211 9046 333 10881 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M10880 4779c-1979-108-3078-1153-4089-2267C5607 1211 4560 333 2725 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path id="1" d="M10880 4779c-1979-108-3078-1153-4089-2267C5607 1211 4560 333 2725 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M15274 4779c-1979-108-3078-1153-4089-2267C10001 1211 8954 333 7119 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path id="1" d="M15274 4779c-1979-108-3078-1153-4089-2267C10001 1211 8954 333 7119 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M7120 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path id="1" d="M7120 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M2597 4787c1986-109 3089-1157 4103-2275C7888 1206 8938 326 10780 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M2597 4787c1986-109 3089-1157 4103-2275C7888 1206 8938 326 10780 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M10780 4787c-1986-109-3089-1157-4103-2275C5489 1206 4439 326 2597 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M10780 4787c-1986-109-3089-1157-4103-2275C5489 1206 4439 326 2597 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M15403 4787c-1986-109-3089-1157-4103-2275C10112 1206 9062 326 7220 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M15403 4787c-1986-109-3089-1157-4103-2275C10112 1206 9062 326 7220 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M7220 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M7220 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M2497 4787c1986-109 3089-1157 4103-2275C7788 1206 8838 326 10680 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M2497 4787c1986-109 3089-1157 4103-2275C7788 1206 8838 326 10680 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M10680 4787c-1986-109-3089-1157-4103-2275C5389 1206 4339 326 2497 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M10680 4787c-1986-109-3089-1157-4103-2275C5389 1206 4339 326 2497 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M15503 4787c-1986-109-3089-1157-4103-2275C10212 1206 9162 326 7320 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M15503 4787c-1986-109-3089-1157-4103-2275C10212 1206 9162 326 7320 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M7320 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M7320 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M2397 4787c1986-109 3089-1157 4103-2275C7688 1206 8738 326 10580 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M2397 4787c1986-109 3089-1157 4103-2275C7688 1206 8738 326 10580 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M10580 4787c-1986-109-3089-1157-4103-2275C5289 1206 4239 326 2397 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M10580 4787c-1986-109-3089-1157-4103-2275C5289 1206 4239 326 2397 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M15603 4787c-1986-109-3089-1157-4103-2275C10312 1206 9262 326 7420 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M15603 4787c-1986-109-3089-1157-4103-2275C10312 1206 9262 326 7420 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M7420 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M7420 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M2326 4779c1979-108 3078-1153 4089-2267C7599 1211 8646 333 10481 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path id="1" d="M2326 4779c1979-108 3078-1153 4089-2267C7599 1211 8646 333 10481 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M10480 4779c-1979-108-3078-1153-4089-2267C5207 1211 4160 333 2325 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path id="1" d="M10480 4779c-1979-108-3078-1153-4089-2267C5207 1211 4160 333 2325 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M15674 4779c-1979-108-3078-1153-4089-2267C10401 1211 9354 333 7519 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path id="1" d="M15674 4779c-1979-108-3078-1153-4089-2267C10401 1211 9354 333 7519 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M7520 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path id="1" d="M7520 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M2197 4787c1986-109 3089-1157 4103-2275C7488 1206 8538 326 10380 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M2197 4787c1986-109 3089-1157 4103-2275C7488 1206 8538 326 10380 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M10380 4787c-1986-109-3089-1157-4103-2275C5089 1206 4039 326 2197 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M10380 4787c-1986-109-3089-1157-4103-2275C5089 1206 4039 326 2197 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M15803 4787c-1986-109-3089-1157-4103-2275C10512 1206 9462 326 7620 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M15803 4787c-1986-109-3089-1157-4103-2275C10512 1206 9462 326 7620 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M7620 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M7620 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M2097 4787c1986-109 3089-1157 4103-2275C7388 1206 8438 326 10280 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M2097 4787c1986-109 3089-1157 4103-2275C7388 1206 8438 326 10280 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M10280 4787c-1986-109-3089-1157-4103-2275C4989 1206 3939 326 2097 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M10280 4787c-1986-109-3089-1157-4103-2275C4989 1206 3939 326 2097 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M15903 4787c-1986-109-3089-1157-4103-2275C10612 1206 9562 326 7720 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M15903 4787c-1986-109-3089-1157-4103-2275C10612 1206 9562 326 7720 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M7720 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M7720 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M1997 4787c1986-109 3089-1157 4103-2275C7288 1206 8338 326 10180 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M1997 4787c1986-109 3089-1157 4103-2275C7288 1206 8338 326 10180 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M10180 4787c-1986-109-3089-1157-4103-2275C4889 1206 3839 326 1997 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M10180 4787c-1986-109-3089-1157-4103-2275C4889 1206 3839 326 1997 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M16003 4787c-1986-109-3089-1157-4103-2275C10712 1206 9662 326 7820 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M16003 4787c-1986-109-3089-1157-4103-2275C10712 1206 9662 326 7820 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M7820 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M7820 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M1897 4787c1986-109 3089-1157 4103-2275C7188 1206 8238 326 10080 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M1897 4787c1986-109 3089-1157 4103-2275C7188 1206 8238 326 10080 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M10080 4787c-1986-109-3089-1157-4103-2275C4789 1206 3739 326 1897 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M10080 4787c-1986-109-3089-1157-4103-2275C4789 1206 3739 326 1897 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M16103 4787c-1986-109-3089-1157-4103-2275C10812 1206 9762 326 7920 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M16103 4787c-1986-109-3089-1157-4103-2275C10812 1206 9762 326 7920 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M7920 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#E1F3FD" d="M7920 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M1826 4779c1979-108 3078-1153 4089-2267C7099 1211 8146 333 9981 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path id="1" d="M1826 4779c1979-108 3078-1153 4089-2267C7099 1211 8146 333 9981 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9980 4779c-1979-108-3078-1153-4089-2267C4707 1211 3660 333 1825 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path id="1" d="M9980 4779c-1979-108-3078-1153-4089-2267C4707 1211 3660 333 1825 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M16174 4779c-1979-108-3078-1153-4089-2267C10901 1211 9854 333 8019 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path id="1" d="M16174 4779c-1979-108-3078-1153-4089-2267C10901 1211 9854 333 8019 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8020 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path id="1" d="M8020 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M1717 4787c1986-109 3089-1157 4103-2275C7008 1206 8058 326 9900 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M1717 4787c1986-109 3089-1157 4103-2275C7008 1206 8058 326 9900 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9900 4787c-1986-109-3089-1157-4103-2275C4609 1206 3559 326 1717 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M9900 4787c-1986-109-3089-1157-4103-2275C4609 1206 3559 326 1717 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M16283 4787c-1986-109-3089-1157-4103-2275C10992 1206 9942 326 8100 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M16283 4787c-1986-109-3089-1157-4103-2275C10992 1206 9942 326 8100 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8100 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M8100 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M1617 4787c1986-109 3089-1157 4103-2275C6908 1206 7958 326 9800 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M1617 4787c1986-109 3089-1157 4103-2275C6908 1206 7958 326 9800 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9800 4787c-1986-109-3089-1157-4103-2275C4509 1206 3459 326 1617 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M9800 4787c-1986-109-3089-1157-4103-2275C4509 1206 3459 326 1617 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M16383 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M16383 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8200 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M8200 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M1517 4787c1986-109 3089-1157 4103-2275C6808 1206 7858 326 9700 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M1517 4787c1986-109 3089-1157 4103-2275C6808 1206 7858 326 9700 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9700 4787c-1986-109-3089-1157-4103-2275C4409 1206 3359 326 1517 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M9700 4787c-1986-109-3089-1157-4103-2275C4409 1206 3359 326 1517 219v-6c2027 68 3129 1154 4129 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M16483 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path id="1" fill="#FB0" d="M16483 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8300 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path id="1" fill="#FB0" d="M8300 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4129 2249-1188 1304-2222 2170-4054 2315v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M4909 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M4909 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M13092 4787c-1986-109-3089-1157-4103-2275C7801 1206 6751 326 4909 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M13092 4787c-1986-109-3089-1157-4103-2275C7801 1206 6751 326 4909 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M4797 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M4797 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M12980 4787c-1986-109-3089-1157-4103-2275C7689 1206 6639 326 4797 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M12980 4787c-1986-109-3089-1157-4103-2275C7689 1206 6639 326 4797 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M13203 4787c-1986-109-3089-1157-4103-2275C7912 1206 6862 326 5020 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M13203 4787c-1986-109-3089-1157-4103-2275C7912 1206 6862 326 5020 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M5020 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M5020 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M4697 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M4697 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M12880 4787c-1986-109-3089-1157-4103-2275C7589 1206 6539 326 4697 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M12880 4787c-1986-109-3089-1157-4103-2275C7589 1206 6539 326 4697 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M4597 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M4597 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M12780 4787c-1986-109-3089-1157-4103-2275C7489 1206 6439 326 4597 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M12780 4787c-1986-109-3089-1157-4103-2275C7489 1206 6439 326 4597 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M13303 4787c-1986-109-3089-1157-4103-2275C8012 1206 6962 326 5120 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M13303 4787c-1986-109-3089-1157-4103-2275C8012 1206 6962 326 5120 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M5120 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M5120 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M13403 4787c-1986-109-3089-1157-4103-2275C8112 1206 7062 326 5220 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M13403 4787c-1986-109-3089-1157-4103-2275C8112 1206 7062 326 5220 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M5220 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path id="1" fill="#F3321A" d="M5220 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M4526 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <path id="1" d="M4526 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M12680 4779c-1979-108-3078-1153-4089-2267C7407 1211 6360 333 4525 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M12680 4779c-1979-108-3078-1153-4089-2267C7407 1211 6360 333 4525 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M13474 4779c-1979-108-3078-1153-4089-2267C8201 1211 7154 333 5319 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M13474 4779c-1979-108-3078-1153-4089-2267C8201 1211 7154 333 5319 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M5320 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
        <path id="1" d="M5320 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M1416 4787c1986-109 3089-1157 4103-2275C6707 1206 7757 326 9599 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" d="M1416 4787c1986-109 3089-1157 4103-2275C6707 1206 7757 326 9599 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9600 4787c-1986-109-3089-1157-4103-2275C4309 1206 3259 326 1417 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" d="M9600 4787c-1986-109-3089-1157-4103-2275C4309 1206 3259 326 1417 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M16584 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" d="M16584 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8400 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" d="M8400 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M4397 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M4397 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M12580 4787c-1986-109-3089-1157-4103-2275C7289 1206 6239 326 4397 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M12580 4787c-1986-109-3089-1157-4103-2275C7289 1206 6239 326 4397 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M13603 4787c-1986-109-3089-1157-4103-2275C8312 1206 7262 326 5420 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M13603 4787c-1986-109-3089-1157-4103-2275C8312 1206 7262 326 5420 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M5420 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M5420 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M1316 4787c1986-109 3089-1157 4103-2275C6607 1206 7657 326 9499 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M1316 4787c1986-109 3089-1157 4103-2275C6607 1206 7657 326 9499 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M9500 4787c-1986-109-3089-1157-4103-2275C4209 1206 3159 326 1317 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M9500 4787c-1986-109-3089-1157-4103-2275C4209 1206 3159 326 1317 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M16684 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M16684 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M8500 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M8500 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M4297 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M4297 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M12480 4787c-1986-109-3089-1157-4103-2275C7189 1206 6139 326 4297 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M12480 4787c-1986-109-3089-1157-4103-2275C7189 1206 6139 326 4297 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M13703 4787c-1986-109-3089-1157-4103-2275C8412 1206 7362 326 5520 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M13703 4787c-1986-109-3089-1157-4103-2275C8412 1206 7362 326 5520 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M5520 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M5520 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M1216 4787c1986-109 3089-1157 4103-2275C6507 1206 7557 326 9399 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M1216 4787c1986-109 3089-1157 4103-2275C6507 1206 7557 326 9399 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M9400 4787c-1986-109-3089-1157-4103-2275C4109 1206 3059 326 1217 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M9400 4787c-1986-109-3089-1157-4103-2275C4109 1206 3059 326 1217 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M16784 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M16784 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M8600 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M8600 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M4197 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M4197 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M12380 4787c-1986-109-3089-1157-4103-2275C7089 1206 6039 326 4197 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M12380 4787c-1986-109-3089-1157-4103-2275C7089 1206 6039 326 4197 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M13803 4787c-1986-109-3089-1157-4103-2275C8512 1206 7462 326 5620 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M13803 4787c-1986-109-3089-1157-4103-2275C8512 1206 7462 326 5620 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M5620 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M5620 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M1116 4787c1986-109 3089-1157 4103-2275C6407 1206 7457 326 9299 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M1116 4787c1986-109 3089-1157 4103-2275C6407 1206 7457 326 9299 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M9300 4787c-1986-109-3089-1157-4103-2275C4009 1206 2959 326 1117 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M9300 4787c-1986-109-3089-1157-4103-2275C4009 1206 2959 326 1117 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M16884 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M16884 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M8700 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M8700 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M1016 4787c1986-109 3089-1157 4103-2275C6307 1206 7357 326 9199 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M1016 4787c1986-109 3089-1157 4103-2275C6307 1206 7357 326 9199 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M9200 4787c-1986-109-3089-1157-4103-2275C3909 1206 2859 326 1017 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M9200 4787c-1986-109-3089-1157-4103-2275C3909 1206 2859 326 1017 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M16984 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M16984 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#111" stroke-width="13.6" d="M8800 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#E1F3FD" d="M8800 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M4126 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
        <path id="1" d="M4126 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M12280 4779c-1979-108-3078-1153-4089-2267C7007 1211 5960 333 4125 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M12280 4779c-1979-108-3078-1153-4089-2267C7007 1211 5960 333 4125 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M13874 4779c-1979-108-3078-1153-4089-2267C8601 1211 7554 333 5719 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M13874 4779c-1979-108-3078-1153-4089-2267C8601 1211 7554 333 5719 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M5720 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
        <path id="1" d="M5720 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M945 4779c1979-108 3078-1153 4089-2267C6218 1211 7265 333 9100 227v-6c-2020 68-3118 1150-4115 2241C3801 3761 2770 4625 946 4769v10z" />
        <path id="1" d="M945 4779c1979-108 3078-1153 4089-2267C6218 1211 7265 333 9100 227v-6c-2020 68-3118 1150-4115 2241C3801 3761 2770 4625 946 4769v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9100 4779c-1979-108-3078-1153-4089-2267C3827 1211 2780 333 945 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M9100 4779c-1979-108-3078-1153-4089-2267C3827 1211 2780 333 945 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17055 4779c-1979-108-3078-1153-4089-2267-1184-1301-2231-2179-4066-2285v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M17055 4779c-1979-108-3078-1153-4089-2267-1184-1301-2231-2179-4066-2285v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8900 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
        <path id="1" d="M8900 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M3997 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M3997 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M12180 4787c-1986-109-3089-1157-4103-2275C6889 1206 5839 326 3997 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M12180 4787c-1986-109-3089-1157-4103-2275C6889 1206 5839 326 3997 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M14003 4787c-1986-109-3089-1157-4103-2275C8712 1206 7662 326 5820 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M14003 4787c-1986-109-3089-1157-4103-2275C8712 1206 7662 326 5820 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M5820 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M5820 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M816 4787c1986-109 3089-1157 4103-2275C6107 1206 7157 326 8999 219v-6c-2027 68-3129 1154-4130 2249C3681 3766 2647 4632 815 4778v10z" />
        <path id="1" fill="#F3321A" d="M816 4787c1986-109 3089-1157 4103-2275C6107 1206 7157 326 8999 219v-6c-2027 68-3129 1154-4130 2249C3681 3766 2647 4632 815 4778v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9000 4787c-1986-109-3089-1157-4103-2275C3709 1206 2659 326 817 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M9000 4787c-1986-109-3089-1157-4103-2275C3709 1206 2659 326 817 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17184 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M17184 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9000 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M9000 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M3897 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M3897 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M12080 4787c-1986-109-3089-1157-4103-2275C6789 1206 5739 326 3897 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M12080 4787c-1986-109-3089-1157-4103-2275C6789 1206 5739 326 3897 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M14103 4787c-1986-109-3089-1157-4103-2275C8812 1206 7762 326 5920 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M14103 4787c-1986-109-3089-1157-4103-2275C8812 1206 7762 326 5920 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M5920 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M5920 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M716 4787c1986-109 3089-1157 4103-2275C6007 1206 7057 326 8899 219v-6c-2027 68-3129 1154-4130 2249C3581 3766 2547 4632 715 4778v10z" />
        <path id="1" fill="#F3321A" d="M716 4787c1986-109 3089-1157 4103-2275C6007 1206 7057 326 8899 219v-6c-2027 68-3129 1154-4130 2249C3581 3766 2547 4632 715 4778v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8900 4787c-1986-109-3089-1157-4103-2275C3609 1206 2559 326 717 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M8900 4787c-1986-109-3089-1157-4103-2275C3609 1206 2559 326 717 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17284 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M17284 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9100 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M9100 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M3797 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M3797 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M11980 4787c-1986-109-3089-1157-4103-2275C6689 1206 5639 326 3797 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M11980 4787c-1986-109-3089-1157-4103-2275C6689 1206 5639 326 3797 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M14203 4787c-1986-109-3089-1157-4103-2275C8912 1206 7862 326 6020 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M14203 4787c-1986-109-3089-1157-4103-2275C8912 1206 7862 326 6020 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M6020 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M6020 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M616 4787c1986-109 3089-1157 4103-2275C5907 1206 6957 326 8799 219v-6c-2027 68-3129 1154-4130 2249C3481 3766 2447 4632 615 4778v10z" />
        <path id="1" fill="#F3321A" d="M616 4787c1986-109 3089-1157 4103-2275C5907 1206 6957 326 8799 219v-6c-2027 68-3129 1154-4130 2249C3481 3766 2447 4632 615 4778v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8800 4787c-1986-109-3089-1157-4103-2275C3509 1206 2459 326 617 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M8800 4787c-1986-109-3089-1157-4103-2275C3509 1206 2459 326 617 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17384 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M17384 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9200 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M9200 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M3697 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M3697 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M11880 4787c-1986-109-3089-1157-4103-2275C6589 1206 5539 326 3697 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M11880 4787c-1986-109-3089-1157-4103-2275C6589 1206 5539 326 3697 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M14303 4787c-1986-109-3089-1157-4103-2275C9012 1206 7962 326 6120 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M14303 4787c-1986-109-3089-1157-4103-2275C9012 1206 7962 326 6120 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M6120 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M6120 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M516 4787c1986-109 3089-1157 4103-2275C5807 1206 6857 326 8699 219v-6c-2027 68-3129 1154-4130 2249C3381 3766 2347 4632 515 4778v10z" />
        <path id="1" fill="#F3321A" d="M516 4787c1986-109 3089-1157 4103-2275C5807 1206 6857 326 8699 219v-6c-2027 68-3129 1154-4130 2249C3381 3766 2347 4632 515 4778v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8700 4787c-1986-109-3089-1157-4103-2275C3409 1206 2359 326 517 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M8700 4787c-1986-109-3089-1157-4103-2275C3409 1206 2359 326 517 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17484 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M17484 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9300 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M9300 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M3597 4787c1986-109 3089-1157 4103-2275C8888 1206 9938 326 11780 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M3597 4787c1986-109 3089-1157 4103-2275C8888 1206 9938 326 11780 219v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M11780 4787c-1986-109-3089-1157-4103-2275C6489 1206 5439 326 3597 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M11780 4787c-1986-109-3089-1157-4103-2275C6489 1206 5439 326 3597 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M14403 4787c-1986-109-3089-1157-4103-2275C9112 1206 8062 326 6220 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M14403 4787c-1986-109-3089-1157-4103-2275C9112 1206 8062 326 6220 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M6220 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M6220 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M416 4787c1986-109 3089-1157 4103-2275C5707 1206 6757 326 8599 219v-6c-2027 68-3129 1154-4130 2249C3281 3766 2247 4632 415 4778v10z" />
        <path id="1" fill="#F3321A" d="M416 4787c1986-109 3089-1157 4103-2275C5707 1206 6757 326 8599 219v-6c-2027 68-3129 1154-4130 2249C3281 3766 2247 4632 415 4778v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8600 4787c-1986-109-3089-1157-4103-2275C3309 1206 2259 326 417 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M8600 4787c-1986-109-3089-1157-4103-2275C3309 1206 2259 326 417 219v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17584 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M17584 4787c-1986-109-3089-1157-4103-2275-1188-1306-2238-2186-4080-2293v-6c2027 68 3129 1154 4130 2249 1188 1304 2222 2170 4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9400 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
        <path id="1" fill="#F3321A" d="M9400 4787c1986-109 3089-1157 4103-2275 1188-1306 2238-2186 4080-2293v-6c-2027 68-3129 1154-4130 2249-1188 1304-2222 2170-4054 2316v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M3526 4779c1979-108 3078-1153 4089-2267C8799 1211 9846 333 11681 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
        <path id="1" d="M3526 4779c1979-108 3078-1153 4089-2267C8799 1211 9846 333 11681 227v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M11680 4779c-1979-108-3078-1153-4089-2267C6407 1211 5360 333 3525 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M11680 4779c-1979-108-3078-1153-4089-2267C6407 1211 5360 333 3525 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M14474 4779c-1979-108-3078-1153-4089-2267C9201 1211 8154 333 6319 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M14474 4779c-1979-108-3078-1153-4089-2267C9201 1211 8154 333 6319 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M6320 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
        <path id="1" d="M6320 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2215 2163-4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M345 4779c1979-108 3078-1153 4089-2267C5618 1211 6665 333 8500 227v-6c-2020 68-3118 1150-4115 2241C3201 3761 2170 4625 346 4769v10z" />
        <path id="1" d="M345 4779c1979-108 3078-1153 4089-2267C5618 1211 6665 333 8500 227v-6c-2020 68-3118 1150-4115 2241C3201 3761 2170 4625 346 4769v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8500 4779c-1979-108-3078-1153-4089-2267C3227 1211 2180 333 345 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2214 2163 4039 2307v10z" />
        <path id="1" d="M8500 4779c-1979-108-3078-1153-4089-2267C3227 1211 2180 333 345 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2214 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17655 4779c-1979-108-3078-1153-4089-2267-1184-1301-2231-2179-4066-2285v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M17655 4779c-1979-108-3078-1153-4089-2267-1184-1301-2231-2179-4066-2285v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9500 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2214 2163-4039 2307v10z" />
        <path id="1" d="M9500 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2214 2163-4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M245 4779c1979-108 3078-1153 4089-2267C5518 1211 6565 333 8400 227v-6c-2020 68-3118 1150-4115 2241C3101 3761 2070 4625 246 4769v10z" />
        <path id="1" d="M245 4779c1979-108 3078-1153 4089-2267C5518 1211 6565 333 8400 227v-6c-2020 68-3118 1150-4115 2241C3101 3761 2070 4625 246 4769v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M8400 4779c-1979-108-3078-1153-4089-2267C3127 1211 2080 333 245 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2214 2163 4039 2307v10z" />
        <path id="1" d="M8400 4779c-1979-108-3078-1153-4089-2267C3127 1211 2080 333 245 227v-6c2020 68 3118 1150 4115 2241 1184 1299 2214 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M17755 4779c-1979-108-3078-1153-4089-2267-1184-1301-2231-2179-4066-2285v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
        <path id="1" d="M17755 4779c-1979-108-3078-1153-4089-2267-1184-1301-2231-2179-4066-2285v-6c2020 68 3118 1150 4115 2241 1184 1299 2215 2163 4039 2307v10z" />
      </g>
      <g>
        <path fill="none" type = "button" stroke="#000" stroke-width="13.6" d="M9600 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2214 2163-4039 2307v10z" />
        <path id="1" d="M9600 4779c1979-108 3078-1153 4089-2267 1184-1301 2231-2179 4066-2285v-6c-2020 68-3118 1150-4115 2241-1184 1299-2214 2163-4039 2307v10z" />
      </g>
    </g>
  </g>
</svg></div>
    
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
<script>
var _currentFill = "fill:#000";
$("#pattern").click(function (event) {
        $(event.target).attr('style', _currentFill);
    });
var $swatches = $("#swatches");
    $swatches.click(function (event) {
        $swatch = $(event.target);
        loc = [parseInt($swatch.attr('x'), 10), parseInt($swatch.attr('y'), 10)]
        $("#selection", $swatches).attr('x', loc[0]);
        $("#selection", $swatches).attr('y', loc[1]);
        _currentFill = $swatch.attr('style');
    })
</script>
    
 <script>
        window.onload       = function() {      
        window.cross      = svgPanZoom('#pattern', {
        zoomEnabled: true,
        zoomScaleSensitivity: 0.5,
		minZoom: 1,
		maxZoom: 20,
		panEnabled: true,
		dblClickZoomEnabled: false,
        fit: true,
        center: true,	
                 });
      };
</script>   
</body>
</html>

   
   
