import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import "./App.style.css"
import Main from "./Main"
import { sleep } from "../helpers";


function App() {

  const [size, setSize] = useState(100);
  const [arr, setArr] = useState([]);
  const [cur, setCur] = useState(null);

  const handleChange = (event, newValue) => {
    setSize(newValue);
    updateList();
  };



  useEffect(() => {
    updateList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size]);

  const generateRandomBetween = (min, max) => {
    let ranNum = Math.floor(Math.random() * (max - min)) + min;
    return ranNum;
  }

  const updateList = () => {
    const randomArr = Array.from({ length: size }, () => generateRandomBetween(5, 100) * 2);
    setArr(randomArr);
  };


  ////////////////////////////////////////////////////
  const bubbleOnClick = async () => {

    async function bubbleSort(arr) {

      const len = arr.length;
      for (let i = 0; i < len; i++) {
        await sleep(1);
        for (let j = 0; j < len; j++) {

          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
          setArr([...arr]);
        }

      }
      return arr;
    }

    bubbleSort(arr);

  };

  //////////////////////////////////////////

  const MergeOnClick = async () => {

    async function mergeArray(start, end) {
      let mid = parseInt((start + end) >> 1);
      let start1 = start, start2 = mid + 1
      let end1 = mid, end2 = end
      var itmd = [];
      let index = start

      while (start1 <= end1 && start2 <= end2) {
        if (arr[start1] <= arr[start2]) {
          itmd[index] = arr[start1]
          index = index + 1
          start1 = start1 + 1;
        }
        else if (arr[start1] > arr[start2]) {
          itmd[index] = arr[start2]
          index = index + 1
          start2 = start2 + 1;
        }
      }

      while (start1 <= end1) {
        itmd[index] = arr[start1]
        index = index + 1
        start1 = start1 + 1;
      }

      while (start2 <= end2) {
        itmd[index] = arr[start2]
        index = index + 1
        start2 = start2 + 1;
      }

      index = start
      while (index <= end) {
        await sleep(5);
        arr[index] = itmd[index];
        index++;
      }
      setArr([...arr]);
    }


    const mergeSort = async (start, end) => {
      if (start < end) {
        let mid = parseInt((start + end) >> 1)

        await mergeSort(start, mid)

        await mergeSort(mid + 1, end)

        await mergeArray(start, end)

        await sleep(20);
      }
    }
    mergeSort(0, arr.length - 1);
  };

  //////////////////////////////////////////

  const QuickOnClick = async () => {

    function swap(arr, a, b) {
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }

    async function Partition(arr, start, end) {

      let index = start;
      let Pivot = arr[end];

      for (let i = start; i < end; i++) {
        if (arr[i] < Pivot) {
          swap(arr, i, index);
          setArr([...arr]);
          await sleep(50);
          index++;
        }

      }

      swap(arr, index, end);
      setArr([...arr]);
      return index;
    }


    async function QuickSort(arr, start, end) {
      if (start >= end)
        return;

      let index = await Partition(arr, start, end);

      await Promise.all([QuickSort(arr, start, index - 1), QuickSort(arr, index + 1, end)]);
    }

    QuickSort(arr, 0, arr.length - 1);

  };

  ////////////////////////////////////////////

  const HeapOnClick = async () => {

    async function heapify(arr, n, i) {
      var largest = i; // Initialize largest as root
      var l = 2 * i + 1; // left = 2*i + 1
      var r = 2 * i + 2; // right = 2*i + 2

      // If left child is larger than root
      if (l < n && arr[l] > arr[largest])
        largest = l;

      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest])
        largest = r;

      // If largest is not root
      if (largest !== i) {
        var swap = arr[i];

        arr[i] = arr[largest];
        arr[largest] = swap;
        await sleep(5);
        setArr([...arr]);

        // Recursively heapify the affected sub-tree
        await heapify(arr, n, largest);
      }
      setArr([...arr]);
    }


    async function HeapSort(arr) {
      var n = arr.length;

      // Build heap (rearrange array)
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
      }

      // One by one extract an element from heap
      for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        await sleep(10);
        setArr([...arr]);

        // call max heapify on the reduced heap
        await heapify(arr, i, 0);
      }
      // setArr([...arr]);
    }

    HeapSort(arr);

  }
  //////////////////////////////////////////

  const SelectOnClick = async () => {

    async function selectionSort(inputArr) {
      let n = inputArr.length;

      for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for (let j = i + 1; j < n; j++) {

          if (inputArr[j] < inputArr[min]) {
            min = j;
            setArr([...arr]);
          }
        }
        if (min !== i) {
          // Swapping the elements
          let tmp = inputArr[i];
          inputArr[i] = inputArr[min];
          inputArr[min] = tmp;
          setArr([...arr]);
        }
        await sleep(100);
      }



      return inputArr;
    }
    selectionSort(arr);
  }
  //////////////////////////////////////////

  const InsertOnClick = async () => {

    async function insertionSort(inputArr) {
      let n = inputArr.length;
      for (let i = 1; i < n; i++) {
        let current = inputArr[i];
        setCur(i);
        let j = i - 1;
        while ((j > -1) && (current < inputArr[j])) {
          inputArr[j + 1] = inputArr[j];
          j--;
          setArr([...arr]);
        }
        inputArr[j + 1] = current;
        setArr([...arr]);
        await sleep(100);
      }

      return inputArr;
    }

    insertionSort(arr);

  }
  ///////////////////////////////////////////
  return (
    <div className="App">
      <Header handleChange={handleChange}
        updateList={updateList}
        bubbleOnClick={bubbleOnClick}
        MergeOnClick={MergeOnClick}
        QuickOnClick={QuickOnClick}
        HeapOnClick={HeapOnClick}
        SelectOnClick={SelectOnClick}
        InsertOnClick={InsertOnClick}
        value={size}
      />
      <Main data={arr} val={cur} />
    </div>
  );
}

export default App;
