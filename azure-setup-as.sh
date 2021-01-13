#!/bin/bash

# Ex.
# ./azure-setup-as.sh ire1 vnet1 subnet1 ase-ire1

# $1 = resource group
# $2 = virtual network name
# $3 = subnet name
# $4 = ase name

az network vnet create --resource-group $1 --name $2 \
  --address-prefixes 10.0.0.0/16 --subnet-name $3 --subnet-prefixes 10.0.0.0/24

az appservice ase create --name $4 --resource-group $1 --vnet-name $2 \
  --subnet $3
