import React from 'react';

import { WButton, WRow, WCol } from 'wt-frontend';

const TableHeader = (props) => {

    const buttonStyle = props.disabled ? ' table-header-button-disabled ' : 'table-header-button ';
    const clickDisabled = () => { };

    return (
        <WRow className="table-header">
            <WCol size="3">
                <WButton className='table-header-section' wType="texted" onClick = {(e) => props.sortingItemsCallBack("task")} >Task</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {(e) => props.sortingItemsCallBack("due_date")}>Due Date</WButton>
            </WCol>

            <WCol size="2">
                <WButton className='table-header-section' wType="texted" onClick = {(e) => props.sortingItemsCallBack("status")}>Status</WButton>
            </WCol>

            
            <WCol size="2">
            <WButton className='table-header-section' wType="texted" onClick = {(e) => props.sortingItemsCallBack("assigned")}>Assigned to</WButton>
            </WCol>


            <WCol size="2">
                <div className="table-header-buttons">
                    <WButton onClick={props.disabled ? clickDisabled : props.addItem} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">add_box</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : props.setShowDelete} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">delete_outline</i>
                    </WButton>
                    <WButton onClick={props.disabled ? clickDisabled : () => props.setActiveList({})} wType="texted" className={`${buttonStyle}`}>
                        <i className="material-icons">close</i>
                    </WButton>
                </div>
            </WCol>

        </WRow>
    );
};

export default TableHeader;