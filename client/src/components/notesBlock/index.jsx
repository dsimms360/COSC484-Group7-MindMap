import { 
    Card,
    HeadingBlock,
    BodyBlock 
} from "./notesBlocks";

function NotesBlocks (){
    return (
        <>
        <Card>
            <HeadingBlock>Notes</HeadingBlock>
            <BodyBlock>
                Acctual notes taking block. note: this is not an input block yet
            </BodyBlock>
        </Card>
        </>
    );
}

export default NotesBlocks;