import { 
    Card,
    HeadingBlock,
    ButtonBlock,
    FormBlock
} from "./eventsBlocks";

function EventsBlock (){
    return(
        <>
        <Card>
            <HeadingBlock>Event Controls</HeadingBlock>
            <ButtonBlock>Add button &emsp; Edit button &emsp; Delete button</ButtonBlock>
            <FormBlock>Respective forms will be here. Note: the purple background will be removed</FormBlock>
        </Card>
        </>
    );

}

export default EventsBlock;