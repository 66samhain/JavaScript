const counties = {
	"01" : "Alba",
	"02" : "Arad",
	"03" : "Argeș",
	"04" : "Bacău",
	"05" : "Bihor",
	"06" : "Bistrița-Năsăud",
	"07" : "Botoșani",
	"08" : "Brașov",
	"09" : "Brăila",
	"10" : "Buzău",
	"11" : "Caraș-Severin",
	"12" : "Cluj",
	"13" : "Constanța",
	"14" : "Covasna",
	"15" : "Dâmbovița",
	"16" : "Dolj",
	"17" : "Galați",
	"18" : "Gorj",
	"19" : "Harghita",
	"20" : "Hunedoara",
	"21" : "Ialomița",
	"22" : "Iași",
	"23" : "Ilfov",
	"24" : "Maramureș",
	"25" : "Mehedinți",
	"26" : "Mureș",
	"27" : "Neamț",
	"28" : "Olt",
	"29" : "Prahova",
	"30" : "Satu Mare",
	"31" : "Sălaj",
	"32" : "Sibiu",
	"33" : "Suceava",
	"34" : "Teleorman",
	"35" : "Timiș",
	"36" : "Tulcea",
	"37" : "Vaslui",
	"38" : "Vâlcea",
	"39" : "Vrancea",
	"41" : "București - Sector 1",
	"42" : "București - Sector 2",
	"43" : "București - Sector 3",
	"44" : "București - Sector 4",
	"45" : "București - Sector 5",
	"46" : "București - Sector 6",
	"47" : "București - Sector 7",
	"48" : "București - Sector 8",
	"51" : "Călărași",
	"52" : "Giurgiu"
};

let inputEl = document.getElementById("input-el");
inputEl.value = "";
let inputBtn = document.getElementById("input-btn");
const detailsEl = document.getElementById("details");

let verificationConstant = "279146358279";
let cnpRegex = /^[1-9]\d{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])(0[1-9]|1[0-9]|2[0-9]|3[0-9]|4[0-8]|5[1-2])\d{4}$/;
// let result = cnp.match(cnpRegex);
// console.log(result);

inputBtn.addEventListener('click', personDetails);


let cnpValidator = () => {
	let cnp = inputEl.value;
	let result = cnp.match(cnpRegex);
	let sum = 0;
	if (result) {
		if (cnp.slice(3 - 4) == "02" && parseInt(cnp.slice(5 - 6)) > 29) {
			return true;
		}
		for (let i = 0; i < 12; i++) {
			sum += parseInt(cnp[i]) * parseInt(verificationConstant[i]);
		}
		const remainder = sum % 11;
		if (remainder < 10) {
			if (remainder == cnp[12]) {
				return true;
			}
		} else if (remainder == 10) {
			if (cnp[12] == 1) {
				return true;
			}
		}
		return false;
	}
}

function personDetails() {
	let cnp = inputEl.value;
	if (cnpValidator(cnp)) {
		detailsEl.innerHTML = "<p>This CNP is valid!</p>";
		switch (cnp[0]) {
			case "1":
				detailsEl.innerHTML += `<p>This person was born male on ${cnp.slice(5, 7)}.${cnp.slice(3, 5)}.19${cnp.slice(1, 3)} in ${counties[cnp.slice(7, 9)]}.</p>`;
				break;
			case "2":
				detailsEl.innerHTML += `<p>This person was born female on ${cnp.slice(5, 7)}.${cnp.slice(3, 5)}.19${cnp.slice(1, 3)} in ${counties[cnp.slice(7, 9)]}.</p>`;
				break;
			case "3":
				detailsEl.innerHTML += `<p>This person was born male on ${cnp.slice(5, 7)}.${cnp.slice(3, 5)}.18${cnp.slice(1, 3)} in ${counties[cnp.slice(7, 9)]}.</p>`;
				break;
			case "4":
				detailsEl.innerHTML += `<p>his person was born female on ${cnp.slice(5, 7)}.${cnp.slice(3, 5)}.18${cnp.slice(1, 3)} in ${counties[cnp.slice(7, 9)]}.</p>`;
				break;
			case "5":
				detailsEl.innerHTML += `<p>This person was born male on ${cnp.slice(5, 7)}.${cnp.slice(3, 5)}.20${cnp.slice(1, 3)} in ${counties[cnp.slice(7, 9)]}.</p>`;
				break;
			case "6":
				detailsEl.innerHTML += `<p>This person was born female on ${cnp.slice(5, 7)}.${cnp.slice(3, 5)}.20${cnp.slice(1, 3)} in ${counties[cnp.slice(7, 9)]}.</p>`;
				break;
			default:
				break;
		}
	} else {
		details.innerHTML = "<p>Invalid CNP.</p>"
	}
}
