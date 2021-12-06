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
            <HeadingBlock>To Do List:</HeadingBlock>
            <DisplayBlock>Displaying all the tasks to do</DisplayBlock>
            <ButtonBlock>Add button &emsp; Delete button</ButtonBlock>
            <FormBlock>Respective forms will be here. Note: the purple background will be removed</FormBlock>
        </Card>
        </>
    );

}

export default TodoBlock;