const modal = document.getElementById("dragonModal");
const classeModal = document.getElementById("classeModal");
const fotoModal = document.getElementById("fotoModal");
const fotoGrande = document.getElementById("fotoGrande");

function abrirModal(nome, imagem, descricao, info, galeria){

    document.getElementById("modalTitulo").textContent = nome;

    document.getElementById("modalImagem").src = imagem;

    document.getElementById("modalDescricao").textContent = descricao;

    document.getElementById("modalInfo").innerHTML = info;

    const galeriaDiv = document.getElementById("modalGaleria");

    galeriaDiv.innerHTML = galeria;

    galeriaDiv.querySelectorAll("img").forEach(img => {
        img.addEventListener("click", () => {
            document.getElementById("modalImagem").src = img.src;
        });
    });

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";

    document.querySelector(".close").onclick = () => {

    modal.style.display = "none";
    document.body.style.overflow = "";

}

    modal.onclick = (e) => {

    if (e.target === modal) {

        modal.style.display = "none";
        document.body.style.overflow = "";

    }

}

}

//classes
function abrirClasse(nome, imagem, descricao, galeria){

    document.getElementById("classeTitulo").textContent = nome;

    document.getElementById("classeImagem").src = imagem;

    document.getElementById("classeDescricao").textContent = descricao;

    const galeriaDiv = document.getElementById("classeGaleria");

    galeriaDiv.innerHTML = galeria;

    galeriaDiv.querySelectorAll("img").forEach(img => {

    img.onclick = () => {

        fotoGrande.src = img.src;

        fotoModal.style.display = "flex";

    };

});

    classeModal.style.display="flex";

    document.body.style.overflow="hidden";

    document.querySelector(".closeClasse").onclick = fecharClasse;

    classeModal.onclick = (e) => {

    if (e.target === classeModal) {

        fecharClasse();

    }

}

}

function fecharClasse(){

    classeModal.style.display="none";

    document.body.style.overflow="";

}

document.querySelector(".closeFoto").onclick = () => {

    fotoModal.style.display = "none";

};

fotoModal.onclick = (e) => {

    if (e.target === fotoModal) {

        fotoModal.style.display = "none";

    }

};