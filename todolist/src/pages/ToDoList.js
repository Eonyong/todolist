import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";


const ToDoList = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
    // const rows = [
    //     {'name': 'Frozen yoghurt', 'calories': 159, 6.0, 24, 4.0},
    //     {'name': 'Ice cream sandwich', 'calories': 237, 9.0, 37, 4.3},
    //     {'name': 'Eclair', 'calories': 262, 16.0, 24, 6.0},
    //     {'name': 'Cupcake', 'calories': 305, 3.7, 67, 4.3},
    //     {'name': 'Gingerbread', 'calories': 356, 16.0, 49, 3.9},
    //   ];

    return(
        <Paper className="todolist">
            <Table className="todotable">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell numeric>Calories</TableCell>
                        <TableCell numeric>Fat (g)</TableCell>
                        <TableCell numeric>Carbs (g)</TableCell>
                        <TableCell numeric>Protein (g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell numeric>{row.calories}</TableCell>
                                <TableCell numeric>{row.fat}</TableCell>
                                <TableCell numeric>{row.carbs}</TableCell>
                                <TableCell numeric>{row.protein}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    )
};

export default ToDoList;