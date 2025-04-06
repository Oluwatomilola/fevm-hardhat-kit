const hre = require("hardhat");

async function main() {const MessageStorage = await hre.ethers.getContractFactory("MessageStorage");
    const messageStorage = await MessageStorage.deploy("Hello Filecoin");

    await messageStorage.waitForDeployment();

    const contractAddress = await messageStorage.getAddress();
    console.log("MessageStorage deployed to:", contractAddress);
    
}

main().catch((error) => {console.error(error);
    process.exitCode = 1;
})
