import React from "react"
import { Button, Wrapper, SortWrapper, SlideWrapper, Text, GNA, Logo } from './header.style'
import Slider from '@material-ui/core/Slider';
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy';
import logo from './android-chrome-512x512.png';




export default function Header({
    handleChange,
    updateList,
    bubbleOnClick,
    MergeOnClick,
    QuickOnClick,
    HeapOnClick,
    value,
    SelectOnClick,
    InsertOnClick,
    isActive,
}) {
    console.log("isActive = ", isActive);
    return (
        <Wrapper>

            <Logo src={logo} />

            <GNA>
                <Button disabled={isActive} onClick={(isActive) === false ? updateList : null} > Generate New Array</Button>
            </GNA>
            <Text disabled={isActive}> Range: </Text>

            <SlideWrapper>
                <Slider disabled={isActive} value={value} onChange={handleChange} max={250} min={10} step={10} aria-labelledby="continuous-slider" />
            </SlideWrapper>


            <SortWrapper>

                <Tooltip title="Complexity: O(NlogN)" position="bottom" trigger="mouseenter">
                    <Button disabled={isActive === true} onClick={(isActive) === false ? MergeOnClick : null}  > Merge Sort</Button>
                </Tooltip>


                <Tooltip title="Complexity: O(NlogN)" position="bottom" trigger="mouseenter">
                    <Button disabled={isActive === true} onClick={(isActive) === false ? QuickOnClick : null}> Quick Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(NlogN)" position="bottom" trigger="mouseenter">
                    <Button disabled={isActive === true} onClick={(isActive) === false ? HeapOnClick : null}> Heap Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(N^2)" position="bottom" trigger="mouseenter">
                    <Button disabled={isActive === true} onClick={(isActive) === false ? bubbleOnClick : null}> Bubble Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(N^2)" position="bottom" trigger="mouseenter">
                    <Button disabled={isActive === true} onClick={(isActive) === false ? InsertOnClick : null}> Insertion Sort</Button>
                </Tooltip>

                <Tooltip title="Complexity: O(N^2)" position="bottom" trigger="mouseenter">
                    <Button disabled={isActive === true} onClick={(isActive) === false ? SelectOnClick : null}> Selection Sort</Button>
                </Tooltip>
            </SortWrapper>


        </Wrapper >
    );

}