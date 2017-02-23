package main

import "fmt"
import "strconv"

func main() {
	var number int
    fmt.Printf("Number to calculate : \n")
	fmt.Scanf("%d", &number)
	fmt.Printf("Result : \n")
	fmt.Printf(strconv.Itoa(factorial(number)))
	
}

func factorial(number int) int{
	if number == 0 {
		return 1
	}
	return number*factorial(number-1)
}