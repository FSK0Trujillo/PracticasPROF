PGDMP         1                {            postgres    12.12    12.12                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
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
                   postgres    false    2826            �            1259    32882    administradores    TABLE     �   CREATE TABLE public.administradores (
    id text NOT NULL,
    email character varying(60),
    nombre character varying(100),
    password text,
    token text,
    confirmado boolean
);
 #   DROP TABLE public.administradores;
       public         heap    postgres    false                      0    32882    administradores 
   TABLE DATA           Y   COPY public.administradores (id, email, nombre, password, token, confirmado) FROM stdin;
    public          postgres    false    203   �          �   x��K�0 �u{
��U+�3�%AM���0��R~���}O���U/�o[UO�$KlPF!jj�R�*�!�,�A= 9��~�1�����W,�2��)5����L�m��x�����%����s�b����S6�����.�     