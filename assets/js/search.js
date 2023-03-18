search();

function search() {
    const urlParams = new URLSearchParams(window.location.search);
    const q = urlParams.get("q");
    document.getElementById("result-search").innerHTML = q;
}