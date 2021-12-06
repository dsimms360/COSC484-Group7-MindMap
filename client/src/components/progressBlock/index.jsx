import { 
    Card, 
    TotalBar, 
    ProgressBar,
    ProgressHeading 
} from "./progressBlocks";

function ProgressBlock (){
    const now = 70;
    return(
        <>
        <Card>
            <ProgressHeading>Habit Progress</ProgressHeading>
            <TotalBar>
                <ProgressBar width={now+"%"} />
            </TotalBar>

        </Card>
        </>
    );

}

export default ProgressBlock;