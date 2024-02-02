const BASE_URL = ("https://api.alquran.clound/v1/");

const container = document.getElementById("container")
const prev =document.getElementById("prev")
const next =document.getElementById("next")

const fetchData = async () => {
    try {
        const res = await fetch(`${BASE_URL}quran/ar.alafasy`)
        if (!res.ok) throw new Error("could not featch Data")
        return res.json();
    }   catch (error) {
        return error.massege;
    }
}

fetchData().then((res) => {
    res.data.surahs.forEach((item) => {
        const ayah =item.ayahs;
        console.log(ayah);
        const div =document.createElement('div');
        div.setAttribute('class','ayah-container');

        ayah.forEach(ayah=>{})
        container.appendChild(div)
        
        });
    }); 
  




    