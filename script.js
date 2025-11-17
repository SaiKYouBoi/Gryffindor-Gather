const urlinput = document.querySelector("input[name=url]")
const employeeimage = document.getElementById("employeeimage")

urlinput.addEventListener('change', () => {

let url = urlinput.value

employeeimage.src = url

});


const addemployee = document.getElementById("addemployee")
const addemployeemodal = document.getElementById("addemployeemodal")
const cancel = document.getElementById("cancel")
const experiencesform = document.getElementById("experiences")
const addexperiencebtn = document.querySelector(".addexperience")
const Employeeform = document.getElementById("Employeeform")

addemployee.addEventListener('click', ()=>{
    addemployeemodal.classList.remove('hidden')
    
});

cancel.addEventListener('click', (e)=>{
    e.preventDefault()
    addemployeemodal.classList.add('hidden')
    Employeeform.reset();
});

addexperiencebtn.addEventListener('click', (e)=>{

    if (e.target.classList.contains("addexperience")) {
        e.preventDefault();}

experiencesform.insertAdjacentHTML("beforeend",`
<div class="border border-gray-400 rounded-[11px] p-4 mt-2.5">
                            <input class="border-gray-300  rounded-md mb-2 border-2 w-full h-[42px] py-2 px-3"
                                name="jobtitle" type="text" placeholder="Job Title">
                            <input class="border-gray-300  rounded-md mb-2 mt-2.5 border-2 w-full h-[42px] py-2 px-3"
                                name="Company / Organization" type="text" placeholder="Company / Organization">

                            <div class="flex gap-1.5 mt-2.5">
                                <div><label class="block mb-1" for="Sdate">Start Date</label>
                                    <input class="border-gray-300  rounded-md mb-2 border-2 w-full h-[38px] py-2 px-3"
                                        name="phone" type="date">
                                </div>
                                <div><label class="block mb-1 " for="Edate">End Date</label>
                                    <input class="border-gray-300  rounded-md mb-2 border-2 w-full h-[38px] py-2 px-3"
                                        name="phone" type="date">
                                </div>
                            </div>
                            <textarea class="border-gray-300 rounded-md mt-2.5 border-2 w-full py-2 px-3" rows="2"
                                name="Description" id="Description" placeholder="Description"></textarea>
                        </div>
`)
});