function maximum(no1 : number,no2 : number,no3 : number): void
{
    if(no1>no2)
    {
        if(no1>no3)
        {
        console.log("no3 is largest number : "+no3)
        }
        console.log("no1 is largest number : "+no1)
    }
    else
    {
        console.log("no2 is largest number: "+no2)
    }
}
var a : number = 23
var b : number = 89
var c : number = 6

maximum(a,b,c)