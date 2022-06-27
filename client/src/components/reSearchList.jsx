import React from "react";
import AddList from "./addList";

const ReSearchList = ({ resultSearch, handleAddList }) => {

    return (
        <div>
            <div>
                {resultSearch.map((content) => (
                    <AddList
                        key={content.id}
                        content={content}
                        handleClick={() => {
                            handleAddList(content)
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReSearchList;