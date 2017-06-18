package main

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	"github.com/gedex/bp3d"
)

// Box a box
type Box struct {
	Name      string
	Length    float64
	Width     float64
	Height    float64
	MaxWeight float64
}

// Item to be packed
type Item struct {
	Name   string
	Length float64
	Width  float64
	Height float64
	Weight float64
}

// Test Test contents
type Test struct {
	Boxes []Box
	Items []Item
}

func main() {
	data := os.Args[1]
	var test Test
	err := json.Unmarshal([]byte(data), &test)
	if err != nil {
		fmt.Println(err)
	}

	p := bp3d.NewPacker()

	// Add bins.
	for _, box := range test.Boxes {
		p.AddBin(bp3d.NewBin(box.Name, box.Width, box.Height, box.Length, box.MaxWeight))
	}

	// Add items.
	for _, item := range test.Items {
		p.AddItem(bp3d.NewItem(item.Name, item.Width, item.Height, item.Length, item.Weight))
	}

	if err := p.Pack(); err != nil {
		log.Fatal(err)
	}

	result, err := json.Marshal(p)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Print(string(result))
}
