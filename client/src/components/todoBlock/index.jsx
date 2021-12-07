import { 
    Card,
    HeadingBlock,
    ButtonBlock,
    FormBlock,
    DisplayBlock 
} from "./todoBlocks";

function TodoBlock (){
    return(
        <>
        <Card>
            <HeadingBlock>T Do List</HeadingBlock>
            <DisplayBlock>Displaying all the test to do</DisplayBlock>
            <ButtonBlock> &emsp; Delete button</ButtonBlock>
            <FormBlock>Respective forms will be here. Note: the purple background will be removed</FormBlock>
        </Card>
        </>
    );

}

export default TodoBlock;