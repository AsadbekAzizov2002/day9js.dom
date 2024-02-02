const BASE_URL = ("https://api.alquran.clound/v1/");

const container = document.getElementById("container")

const fetchData=async ()=>{
    try{
        const res =await fetch(`${BASE_URL}quran/ar.alafasy`);
        if (!res.ok) throw new Error ("Cold not fetch Data");
        return res.json();
    }catch (error){
        return error.massege;
    }
};
fetchData().then((res)=>{
    res.data.surahs.forEach((item)=>{
        const ayahs = item.ayahs;
        console.log(ayahs);

        const audio = document.createElement("audio");
        audio.setAttribute("controls","")
        ayahs.forEach((ayah)=>{
            console.log(ayah);
            const audio =document.createElement("source");
            audio.appendChild(source)
        });
        container.appendChild(audio)
    });
});

// prev.addEventListener("click",(e)=>{});
// next.addEventListener("click",(e)=>{})