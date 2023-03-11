import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, Stats } from "@react-three/drei";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Cylinder3d(props) {

  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  useFrame((state, delta) => (ref.current.rotation.y += 0.02));
  useFrame((state, delta) => (ref.current.rotation.z += 0.03));

  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
    click(!clicked);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 3.5 : 2}
      onClick={handleClick}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <icosahedronGeometry args={[1, 0, 1]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? "hotpink" : "orange"}
      />
        <Html>
            <div>
            <Popper component="div" id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Box
                position={'fixed'} 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignSelf: 'center', 
                    justifyContent: 'center',
                    width: '50%',
                    top: '25%',
                    left: '25%',
                    border: 0,
                    borderRadius: 20,
                    p: 1,
                    bgcolor: 'rgb(0,0,0,0.1)' 
                    }}
                    >
                        {/* Icosahedron Geometry
                        <Typography sx={{ p: 2 }}> color : {hovered ? "hotpink" : "orange"} </Typography> */}
                        <Card sx={{ borderRadius: 10, p:4, maxWidth: 345, bgcolor: 'rgb(0,0,0,0.5)' }}>
                      <CardActionArea sx={{ m: 0}}>
                        <CardMedia           
                          component="img"
                          height="340"
                          image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Icosahedron.svg/330px-Icosahedron.svg.png"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" color="rgb(255,255,255,0.8)">
                            Icosahedron Geometry
                          </Typography>
                          <Typography variant="body2" color="rgb(255,255,255,0.7)">
                            color : {hovered ? "hotpink" : "orange"}
                          </Typography>
                          <Typography variant="subtitle2" color="rgb(255,255,255,0.6)">
                            <br/> In geometry, an icosahedron (/ˌaɪkɒsəˈhiːdrən, -kə-, -koʊ-/ or /aɪˌkɒsəˈhiːdrən/[1]) is a polyhedron with 20 faces. The name comes from Ancient Greek εἴκοσι (eíkosi) 'twenty', and ἕδρα (hédra) 'seat'. The plural can be either "icosahedra" (/-drə/) or "icosahedrons".
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href="https://threejs.org/docs/#api/en/geometries/IcosahedronGeometry" size="small" color="error">
                            https://threejs.org/
                        </Button>
                      </CardActions>
                    </Card>
                </Box>
              </Fade>
            )}
            </Popper>
            </div>

        </Html>
    </mesh>
  );
}
 
export default Cylinder3d;