
import  { forwardRef , useMemo} from "react";
import { useGLTF } from "@react-three/drei";
import { ToonShader } from "./ToonShader";
import { Color, Vector3 } from "three";
import { GhibliShader } from "./GhibilShader";


export const Trees = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/trees.glb");

  const uniforms = useMemo(
    () => ({
      colorMap: {
        value: props.colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    }),
    [props.colors]
  );

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      />
      <shaderMaterial attach="material" {...GhibliShader}
      uniforms={uniforms} />
      <mesh />
    </group>
  );
})

useGLTF.preload("/trees.glb");

