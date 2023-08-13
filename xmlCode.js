const xmlFile = `
<root version="1.2">
	<file source-language="en" target-language="sv-se" >
		<body>
			<group resname="_ptcsma.acl" restype="file"/>
			<trans-unit id="42006" restype="string">
				<source>WARNING</source>
				<target>VARNING</target>
			</trans-unit>
			<trans-unit id="42007" restype="string">
				<source>Note</source>
				<target>Obs!</target>
			</trans-unit>
			<trans-unit id="42008" restype="string">
				<source>DANGER</source>
				<target>FARA</target>
			</trans-unit>
			<trans-unit id="42009" restype="string">
				<source>CAUTION</source>
				<target>FÖRSIKTIGHET</target>
			</trans-unit>
		</body>
	</file>
</root>
`;

const parser = new DOMParser();
const xmlGet = parser.parseFromString(xmlFile, "application/xml");

const targetElement = xmlGet.querySelector('trans-unit[id="42007"] target');
const targetValue = targetElement ? targetElement.textContent : null;

const showTarget = document.getElementById("targetValue");
if (targetValue !== null && showTarget) {
  showTarget.textContent = targetValue;
} else {
  console.log("Not found");
}
