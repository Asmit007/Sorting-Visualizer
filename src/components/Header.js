import React from "react"
import { Button, Wrapper, SortWrapper, SlideWrapper, Text, GNA, Logo } from './header.style'
import Slider from '@material-ui/core/Slider';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import logo from './android-chrome-512x512.png';




export default function Header({ handleChange, updateList, bubbleOnClick, MergeOnClick, QuickOnClick, HeapOnClick, value, SelectOnClick, InsertOnClick }) {

    return (
        <Wrapper>

            <Logo src={logo} />

            <GNA>
                <Button onClick={updateList} > Generate New Array</Button>
            </GNA>
            <Text> Range: </Text>

            <SlideWrapper>
                <Slider value={value} onChange={handleChange} max={250} min={10} step={10} aria-labelledby="continuous-slider" />
            </SlideWrapper>


            <SortWrapper>

                <Tooltip title="Complexity: O(NlogN)" position="bottom" trigger="mouseenter">
                    <Button onClick={MergeOnClick}  > Merge Sort</Button>
                </Tooltip>


                <Tooltip title="Complexity: O(NlogN)" position="bottom" trigger="mouseenter">
                    <Button onClick={QuickOnClick}> Quick Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(NlogN)" position="bottom" trigger="mouseenter">
                    <Button onClick={HeapOnClick}> Heap Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(N^2)" position="bottom" trigger="mouseenter">
                    <Button onClick={bubbleOnClick}> Bubble Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(N^2)" position="bottom" trigger="mouseenter">
                    <Button onClick={InsertOnClick}> Insertion Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(N^2)" position="bottom" trigger="mouseenter">
                    <Button onClick={SelectOnClick}> Selection Sort</Button>
                </Tooltip>
            </SortWrapper>


        </Wrapper >
    );

}