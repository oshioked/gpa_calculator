let calcBtn = document.querySelector(".calcBtn");
let refreshBtn = document.querySelector(".refreshBtn");
let gradeSelect = document.querySelectorAll("select");
let gradeOptions = document.querySelectorAll("option");
let errorMsg = document.querySelector(".errorMsg");
let gpaDisplay = document.querySelector(".gpaDisplay");

const add = (a,b)=> a+b;

let courseCredit = [2, 2, 3, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 4];
let totalCredits = courseCredit.reduce(add);

//changes width of select box on change
gradeSelect.forEach(function(a){
	a.addEventListener("change", function(){
		this.style.width="50px";
	})
})

calcBtn.addEventListener("click", ()=>{
	let valuesOfSelectedGrades = [];
	gradeSelect.forEach(function(a){
		valuesOfSelectedGrades.push(Number(a.value));
		//adds the number value of selected grades to the array
	})

	var courseCreditsXStudentGrade = [];
	for(i = 0; i < 16; i++){
		courseCreditsXStudentGrade.push(courseCredit[i] * valuesOfSelectedGrades[i]);
	}

	let totalCoursesPoint = courseCreditsXStudentGrade.reduce(add);

	let GPA = totalCoursesPoint/totalCredits;
	
	if(isNaN(GPA)){
		errorMsg.style.display="block";
	}
	else{
		gpaDisplay.innerHTML=`<strong>YOUR G.P.A. IS ${GPA}</strong>`;
		errorMsg.style.display="none";
	}
})

refreshBtn.addEventListener("click", ()=>{
	gradeSelect.forEach(function(a){
		a.style.width="auto";
		a.selectedIndex = 0;
		gpaDisplay.innerHTML="";
		errorMsg.style.display="none";
	})
})