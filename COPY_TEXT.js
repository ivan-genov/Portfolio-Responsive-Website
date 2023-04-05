let text = document.getElementById("myText").innerHTML;
copy_yes.className = "copy_yes del";
const copyContent = async () => {
try {
    await navigator.clipboard.writeText(text);
    console.log("Content copied to clipboard");
    alert("Email copied successfully!");
    copy.className = "copy del";
    copy_yes.className = "copy_yes show";
} catch (err) {
    console.error("Failed to copy: ", err);
}
};