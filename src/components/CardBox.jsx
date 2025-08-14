import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

function CardBox() {
    return (
        <div>
            <Card className="w-96 mx-2">
                <CardBody className="text-center">
                    <Typography variant="h5" className="mb-2">
                      some text
                    </Typography>
                    <Typography>
                      hello world
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
}

export default CardBox;