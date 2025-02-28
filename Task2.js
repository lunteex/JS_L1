function getNetworkAndHost(ip, mask) {
    const ipArray = ip.split('.').map(Number);
    const maskArray = mask.split('.').map(Number);
    
    const network = ipArray.map((ipAddress, index) => 
        ipAddress & maskArray[index]
    );
    
    const host = ipArray.map((ipAddress, index) => 
        ipAddress - network[index]
    );
    
    const networkBlock = network.join('.');
    const hostIdentifier = host.join('.');
    
    return [networkBlock, hostIdentifier];
}
