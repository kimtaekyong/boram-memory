import React from "react";

interface TableHeaderProps {
  columns: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((column, id) => (
          <th key={id}>{column}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
