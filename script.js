let calcBtn = document.querySelector(".calcBtn");
let refreshBtn = document.querySelector(".refreshBtn");
let gradeSelect = document.querySelectorAll(".result select");
let gradeSelect1stSem = document.querySelectorAll(".firstSem select");
let gradeSelect2ndSem = document.querySelectorAll(".secondSem select");
let gradeOptions = document.querySelectorAll("option");
let errorMsg = document.querySelector(".errorMsg");
let firstSemCourseListItems = document.querySelectorAll(".firstSemCourseList li");
let secondSemCourseListItems = document.querySelectorAll(".secondSemCourseList li");
let gpaDisplay = document.querySelector(".gpaDisplay");
let dptSelect = document.querySelector(".level select");
let firstSemCourseCodes = document.querySelectorAll(".firstSem .courseCode");
let secondSemCourseCodes = document.querySelectorAll(".secondSem .courseCode");

const cheDatabase = {
	yr1Courses:[["CHM111", "CHM113", "GST111", "GST112", "MTH111", "MTH112", "PHY111", "PHY113"], 
				["CHM122", "CHM124", "GST121", "GST122", "GST123", "MTH123", "MTH125","PHY109", "PHY124"]],
	yr1RespectiveCredits:[[3, 3, 2, 2, 3, 3, 3, 3],[3, 3, 2, 2, 2, 3, 3, 2, 4]],

	yr2Courses:[["ELA201", "CHE211", "CVE211", "EEE211", "ENS211", "PRE211", "MEE211", "MEE221", "ECP281", "EMA281"], 
				["ELA202", "CHE212", "EEE212", "MEE212", "PRE212", "CHE222", "MEE222", "EMA282"]],
	yr2RespectiveCredits:[[2, 2, 3, 3, 2, 2, 3, 3, 2, 2], [2, 2, 3, 3, 2, 3, 3, 4]],

	yr3Courses:[["CHE301", "CHE311", "CHE321", "CHE331", "CHE341", "CHE351", "CHE361", "EMA381"], 
				["CHE302", "CHE312", "CHE322", "CHE332", "CHE352", "CHE362", "CHE372", "EMA382"]],
	yr3RespectiveCredits:[[2, 2, 3, 2, 3, 3, 3, 3], [2, 2, 3, 3, 3, 3, 3, 4]],

	yr4Courses:[["CHE411", "CHE421", "CHE431", "CHE441", "CHE451", "CHE461", "CHE471", "CHE481", "CHE401", "CED300"],
				["UBITS"]],
	yr4RespectiveCredits:[[2, 3, 3, 3, 3, 3, 2, 2, 2, 2],[6]],

	yr5Courses:[["CHE511", "CHE521", "CHE531", "CHE541", "CHE561", "CHE571/591", "CHE581", "PRE571"],
				["CHE512", "CHE522", "CHE532", "CHE542/552", "CHE562", "CHE500", "PRE572"]],
	yr5RespectiveCredits:[[2, 2, 3, 3, 2, 3, 3, 3],[2, 3, 3, 3, 3, 6, 3]],
}

var courseCredit = [["CHM111", "CHM113", "GST111", "GST112", "MTH111", "MTH112", "PHY111", "PHY113"], 
				["CHM122", "CHM124", "GST121", "GST122", "GST123", "MTH123", "MTH125","PHY109", "PHY124"]];

const add = (a,b)=> a+b;
let totalCredits = courseCredit[0].reduce(add) + courseCredit[1].reduce(add);
let totalNumOf1stSemCourses= courseCredit[0].length;
let totalNumOf2ndSemCourses = courseCredit[1].length;

dptSelect.addEventListener("change", (a)=>{
	let numberOf1stSemCourses;  let numberOf2ndSemCourses;
	let displayed1stSemCourseCode; let displayed2ndSemCourseCode;
	if(dptSelect.selectedIndex === 1){
		numberOf1stSemCourses = cheDatabase.yr1Courses[0].length;
		displayed1stSemCourseCode = cheDatabase.yr1Courses[0];
		numberOf2ndSemCourses = cheDatabase.yr1Courses[1].length;
		displayed2ndSemCourseCode = cheDatabase.yr1Courses[1];
		courseCredit = cheDatabase.yr1RespectiveCredits;
	}
	else if(dptSelect.selectedIndex === 2){
		numberOf1stSemCourses = cheDatabase.yr2Courses[0].length;
		displayed1stSemCourseCode = cheDatabase.yr2Courses[0];
		numberOf2ndSemCourses = cheDatabase.yr2Courses[1].length;
		displayed2ndSemCourseCode = cheDatabase.yr2Courses[1];
		courseCredit = cheDatabase.yr2RespectiveCredits;
	}
	else if(dptSelect.selectedIndex === 3){
		numberOf1stSemCourses = cheDatabase.yr3Courses[0].length;
		displayed1stSemCourseCode = cheDatabase.yr3Courses[0];
		numberOf2ndSemCourses = cheDatabase.yr3Courses[1].length;
		displayed2ndSemCourseCode = cheDatabase.yr3Courses[1];
		courseCredit = cheDatabase.yr3RespectiveCredits;
	}
	else if(dptSelect.selectedIndex === 4){
		numberOf1stSemCourses = cheDatabase.yr4Courses[0].length;
		displayed1stSemCourseCode = cheDatabase.yr4Courses[0];
		numberOf2ndSemCourses = cheDatabase.yr4Courses[1].length;
		displayed2ndSemCourseCode = cheDatabase.yr4Courses[1];
		courseCredit = cheDatabase.yr4RespectiveCredits;
	}
	else if(dptSelect.selectedIndex === 5){
		numberOf1stSemCourses = cheDatabase.yr5Courses[0].length;
		displayed1stSemCourseCode = cheDatabase.yr5Courses[0];
		numberOf2ndSemCourses = cheDatabase.yr5Courses[1].length;
		displayed2ndSemCourseCode = cheDatabase.yr5Courses[1];
		courseCredit = cheDatabase.yr5RespectiveCredits;
	}
	for(i = 0; i < numberOf1stSemCourses; i++){
		firstSemCourseCodes[i].innerHTML=displayed1stSemCourseCode[i];
		firstSemCourseListItems[i].style="display:block;";
	}
	for(i = numberOf1stSemCourses; i < 10; i++){
			firstSemCourseListItems[i].style="display:none;";
		}
	for(i = 0; i < numberOf2ndSemCourses; i++){
		secondSemCourseCodes[i].innerHTML=displayed2ndSemCourseCode[i];
		secondSemCourseListItems[i].style="display:block;";
	}
	for(i = numberOf2ndSemCourses; i < 10; i++){
			secondSemCourseListItems[i].style="display:none;";
	}
	totalCredits = courseCredit[0].reduce(add) + courseCredit[1].reduce(add);
	totalNumOf1stSemCourses= courseCredit[0].length; 
	totalNumOf2ndSemCourses = courseCredit[1].length;

})



//Changes width of select box on change
gradeSelect.forEach(function(a){
	a.addEventListener("change", function(){
		this.style.width="50px";
	})
})

//Refresh button
refreshBtn.addEventListener("click", ()=>{
	gradeSelect.forEach(function(a){
		a.style.width="auto";
		a.selectedIndex = 0;
		gpaDisplay.innerHTML="";
		errorMsg.style.display="none";
	})
})

//calc the gpa
calcBtn.addEventListener("click", ()=>{
	let valuesOfSelected1stSemGrades = [];
	gradeSelect1stSem.forEach(function(a){
		valuesOfSelected1stSemGrades.push(Number(a.value));
		//adds the number value of selected 1stsem grades to the array
	})
	

	let valuesOfSelected2ndSemGrades = [];
	gradeSelect2ndSem.forEach(function(a){
		valuesOfSelected2ndSemGrades.push(Number(a.value));
		//adds the number value of selected 2ndSem grades to the array
	})

	var courseCreditsXStudentGradefor1stSem = [];
	var courseCreditsXStudentGradefor2ndSem = [];

	for(i = 0; i < totalNumOf1stSemCourses; i++){
		courseCreditsXStudentGradefor1stSem.push(courseCredit[0][i] * valuesOfSelected1stSemGrades[i]);
	}
	for(i = 0; i < totalNumOf2ndSemCourses; i++){
		courseCreditsXStudentGradefor2ndSem.push(courseCredit[1][i] * valuesOfSelected2ndSemGrades[i]);

	}
	let totalCoursesPoint = courseCreditsXStudentGradefor1stSem.reduce(add) + courseCreditsXStudentGradefor2ndSem.reduce(add);
	let GPA = totalCoursesPoint/totalCredits;
	
	if(isNaN(GPA)){
		errorMsg.style.display="block";
	}
	else{
		gpaDisplay.innerHTML=`<strong>YOUR G.P.A. IS ${GPA}</strong>`;
		errorMsg.style.display="none";
	}
})

const enterBtn = document.getElementById("enterBtn");
const result = document.querySelector(".result");
const dptAndlevelSelectPage = document.querySelector(".level");
enterBtn.addEventListener("click", (a)=>{
	if(dptSelect.selectedIndex !== 0){
		result.style="display: block";
		dptAndlevelSelectPage.style="display: none";
	}else{
		document.getElementById("validityErrorMsg").style="display: block;";
	}
})

const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", ()=>{
	result.style="display: none";
		dptAndlevelSelectPage.style="display: block";
		gradeSelect.forEach((a)=>{
			a.selectedIndex = 0;
			a.style="width:auto;";
		})
})
