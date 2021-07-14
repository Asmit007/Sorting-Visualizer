import React, { useState, useEffect } from "react";
import Header from "../components/Header"
import "./App.style.css"
import Main from "./Main"
import { sleep } from "../helpers";



function App() {

  const [size, setSize] = useState(100);
  const [arr, setArr] = useState([]);
  const [cur, setCur] = useState(null);
  const [next, setNext] = useState(null);
  const [active, setActive] = useState(false);


  const check = (arr) => {

    let flag = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) flag = false;
    }

    if (flag === true)
      setActive(false);
  }

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
  const bubbleOnClick = () => {
    async function bubbleSort(arr) {

      const len = arr.length;
      for (let i = 0; i < len; i++) {
        setCur(i);
        await sleep(10);
        for (let j = 0; j < len; j++) {
          setNext(j);
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setArr([...arr]);
            await sleep(10);
          }
        }
      }

      check(arr);
      setNext(null);
      setCur(null);
    }
    setActive(true);
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
          setCur(index);
          start1 = start1 + 1;
        }
        else if (arr[start1] > arr[start2]) {
          itmd[index] = arr[start2]
          index = index + 1
          setCur(index);
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
      setNext(index);
      while (index <= end) {
        await sleep(10);
        arr[index] = itmd[index];
        setCur(index);
        setArr([...arr]);
        index++;
      }

      check(arr);

    }


    const mergeSort = async (start, end) => {
      if (start < end) {
        let mid = parseInt((start + end) >> 1)

        await mergeSort(start, mid)

        await mergeSort(mid + 1, end)

        await mergeArray(start, end)

        await sleep(20);
      }
      setCur(null);
      setNext(null);
    }
    setActive(true);
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
        setNext(i);
        if (arr[i] < Pivot) {
          swap(arr, i, index);
          setCur(index);
          setArr([...arr]);
          await sleep(50);
          index++;
        }

      }

      swap(arr, index, end);
      setArr([...arr]);
      check(arr);
      return index;
    }


    async function QuickSort(arr, start, end) {
      if (start >= end)
        return;

      let index = await Partition(arr, start, end);

      await Promise.all([QuickSort(arr, start, index - 1), QuickSort(arr, index + 1, end)]);
      setCur(null);
      setNext(null);

    }
    setActive(true);
    QuickSort(arr, 0, arr.length - 1);

  };

  ////////////////////////////////////////////

  const HeapOnClick = async () => {

    async function heapify(arr, n, i) {
      var largest = i;
      var l = 2 * i + 1;
      var r = 2 * i + 2;

      if (l < n && arr[l] > arr[largest])
        largest = l;

      if (r < n && arr[r] > arr[largest])
        largest = r;

      if (largest !== i) {
        var swap = arr[i];
        setCur(i);
        arr[i] = arr[largest];
        arr[largest] = swap;
        await sleep(5);
        setArr([...arr]);
        await heapify(arr, n, largest);
      }
      setArr([...arr]);
    }


    async function HeapSort(arr) {
      var n = arr.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(arr, n, i);
      }

      for (let i = n - 1; i > 0; i--) {
        var temp = arr[0];
        setNext(i);
        arr[0] = arr[i];
        arr[i] = temp;
        await sleep(10);
        setArr([...arr]);
        await heapify(arr, i, 0);
      }
      check(arr);
      setCur(null);
      setNext(null);
    }
    setActive(true);
    HeapSort(arr);
  }
  //////////////////////////////////////////

  const SelectOnClick = async () => {

    async function selectionSort(inputArr) {
      let n = inputArr.length;

      for (let i = 0; i < n; i++) {

        let min = i;
        setCur(i);
        for (let j = i + 1; j < n; j++) {

          if (inputArr[j] < inputArr[min]) {
            min = j;
            setArr([...arr]);
          }
        }
        if (min !== i) {

          let tmp = inputArr[i];
          setNext(min);
          inputArr[i] = inputArr[min];
          inputArr[min] = tmp;
          setArr([...arr]);
        }
        await sleep(100);
        setCur(null);
        setNext(null);
      }

      setCur(null);
      setNext(null);
      check(arr);
    }
    setActive(true);
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
          setNext(j);
          inputArr[j + 1] = inputArr[j];
          j--;

          await sleep(10);
        }

        inputArr[j + 1] = current;
        setArr([...inputArr]);
        await sleep(10);
      }
      setCur(null);
      setNext(null);
      check(arr);
    }
    setActive(true);
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
        isActive={active}
      />
      <Main data={arr} cur={cur} next={next} />
    </div>
  );
}

export default App;
