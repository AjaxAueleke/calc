function num(n)
{
    document.getElementById('calc').value += n;
};
function Eval()
{
    document.getElementById('calc').value = eval(document.getElementById('calc').value);
}
function del()
{
    document.getElementById('calc').value = document.getElementById('calc').value.slice(0, document.getElementById('calc').value.length -1);
}

document.addEventListener();