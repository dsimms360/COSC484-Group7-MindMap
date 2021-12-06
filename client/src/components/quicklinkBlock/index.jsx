import { 
    Card,
    HeadingBlock,
    LinksBlock,
    ButtonBlock

} from "./quicklinkBlocks";

import React, {useState} from 'react';
import QuickLink from '../Quick_Links/QuickLink';
import AddLink from '../Quick_Links/AddLink';
import Links from '../Quick_Links/Links';

// import Working from "./functionality";

function QuicklinkBlock (){

    const[showAddLink, setShowAddLink] = useState(false);
    const[links, setLinks] = useState([]);

    const addLink = (link) => {
        const id = Math.floor(Math.random() *10000) + 1
        console.log(id)
        const newLink = {id, ...link }
        setLinks([...links, newLink])
    }
    const deleteLink = (id) => {
        setLinks(links.filter((link) => link.id !== id))
    }

    return(
        <>
        <Card>
            <HeadingBlock>Quick Links</HeadingBlock>

            <ButtonBlock>
                <QuickLink  onAdd={() => setShowAddLink(!showAddLink)} showAdd={showAddLink} />
                {showAddLink && <AddLink onAdd={addLink} />}
            </ButtonBlock>

            <LinksBlock>
                {links.length > 0 ? (
                <Links links={links} onDelete={deleteLink}/>
                ) : (
                "You don't have any quick links."
                )}
            </LinksBlock>
        </Card>
        </>
    );

}

export default QuicklinkBlock;