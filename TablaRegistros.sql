PGDMP     /    1                {            postgres    12.12    12.12                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            	           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            
           1262    13318    postgres    DATABASE     �   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Mexico.1252' LC_CTYPE = 'Spanish_Mexico.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    2826            �            1259    32894 	   registros    TABLE     w  CREATE TABLE public.registros (
    id text NOT NULL,
    empleado text,
    nombre text,
    puesto_actual text,
    turno text,
    numero_centro text,
    nombre_area text,
    telefono bigint,
    puesto_deseado text,
    ciudad character varying(4),
    cv text,
    fecha_registro date,
    administrador text,
    comentarios text,
    estado character varying(15)
);
    DROP TABLE public.registros;
       public         heap    postgres    false                      0    32894 	   registros 
   TABLE DATA           �   COPY public.registros (id, empleado, nombre, puesto_actual, turno, numero_centro, nombre_area, telefono, puesto_deseado, ciudad, cv, fecha_registro, administrador, comentarios, estado) FROM stdin;
    public          postgres    false    205   �          �   x�U�=o�0 Dg�+<��6&6�!�QH*5�T���Ϙb@��M+u�p�7��׷���]�����9��D���)�㴈HZ].s�0��w��YȀ��v�|B(0��o�`�a� =(�j���'+ek���ii��7^,��$�r�m7�Q�r}�E����rbΨ�<�.�4���U�F0~���o�>��6 ��.&.� ׊�l��~f1?/�ie�5�	Gz��|GT     